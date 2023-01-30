import { CollectionPlates } from "@domain/entity/collectionPlates.entity";
import { Plates } from "@domain/object-value/plates";
import { TerminalController } from "@infrastructure/useCase/terminal/terminalUseCase";
import { initialQuestion } from './injection'
import { logInformation } from "@infrastructure/utils/logInformation";

class AlternativeDishStep {
  
  constructor(
    private collectionPlates: CollectionPlates,
    private terminalController: TerminalController
  ) {}

  async run(plate: Plates): Promise<void> {
    const answerPrato = 
    await this.terminalController.question(
      logInformation("Qual prato você pensou? 🙇 \n")
    )

    const category = await this.terminalController.question(
      logInformation(`${answerPrato} é ____ mas ${plate.name} não. \n`)
    )

    const newPlate = new Plates(answerPrato, category, plate.category)
    this.collectionPlates.setPlatesColelction(newPlate)

    console.draft(
      logInformation(`${answerPrato} é ${category} mas ${plate.name} não. \n`)
    )

    await initialQuestion.run()
  }

}

export { AlternativeDishStep }