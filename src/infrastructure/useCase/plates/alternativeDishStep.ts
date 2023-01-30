import { CollectionPlates } from "@domain/plates/entity/collectionPlates.entity";
import { Plates } from "@domain/plates/object-value/plates";
import { TerminalController } from "@infrastructure/useCase/terminal/terminalUseCase";
import { initialQuestion } from './injection'
import { logInformation } from "@infrastructure/utils/logInformation";

class AlternativeDishStep {
  
  constructor(
    private collectionPlates: CollectionPlates,
    private terminalController: TerminalController
  ) {}

  async run(plate: Plates): Promise<void> {
    const answerPlate = 
    await this.terminalController.question(
      logInformation("Qual prato você pensou? 🙇 \n")
    )

    const category = await this.terminalController.question(
      logInformation(`${answerPlate} é ____ mas ${plate.name} não. \n`)
    )

    const newPlate = new Plates(answerPlate, category, plate.category)
    this.collectionPlates.setPlatesCollection(newPlate)

    console.draft(
      logInformation(`${answerPlate} é ${category} mas ${plate.name} não. \n`)
    )

    await initialQuestion.run()
  }

}

export { AlternativeDishStep }