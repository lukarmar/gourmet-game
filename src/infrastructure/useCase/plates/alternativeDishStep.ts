import { CollectionPlates } from "../../../domain//entity/collectionPlates.entity";
import { Plates } from "../../../domain/entity/plates.entity";
import { TerminalController } from "../terminal/terminalUseCase";


import { initialQuestion } from './injection'

class AlternativeDishStep {
  
  constructor(
    private collectionPlates: CollectionPlates,
    private terminalController: TerminalController
  ) {}

  async run(plate: Plates): Promise<void> {
    const answerPrato = 
    await this.terminalController.question("Qual prato você pensou? \n")

    const category = await this.terminalController.question(`${answerPrato} é ____ mas ${plate.name} não. \n`)

    const newPlate = new Plates(answerPrato, category, plate.category)
    this.collectionPlates.setPlatesColelction(newPlate)

    console.draft(`${answerPrato} é ${category} mas ${plate.name} não. \n`)

    await initialQuestion.run()
  }

}

export { AlternativeDishStep }