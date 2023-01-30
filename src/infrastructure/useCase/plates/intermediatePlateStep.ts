import chalk from "chalk";
import { CollectionPlates } from "@domain/plates/entity/collectionPlates.entity";
import { ANSWER_NO, ANSWER_YES, QUESTION_PLATE, YES_OR_NO } from "@infrastructure/data";
import { Plates } from "@domain/plates/object-value/plates";
import { TerminalController } from "../terminal/terminalUseCase";

import { initialQuestion, restartInitialQuestion, alternativeDishStep } from './injection'
import { logInformation } from "@infrastructure/utils/logInformation";



class IntermediatePlateStep {
  
  constructor(
    private collectionPlates: CollectionPlates,
    private terminalController: TerminalController
  ) {}

  async run(currentPlate: Plates): Promise<void> {
    const answer = 
        await this.terminalController.question(
          logInformation(`${QUESTION_PLATE} ${currentPlate.name}? ${chalk.bold.underline(YES_OR_NO)} \n`)
        )

        if(answer.toLocaleLowerCase() === ANSWER_YES || answer.toLocaleLowerCase() === ANSWER_NO){
          if(answer.toLocaleLowerCase() === ANSWER_YES) {
            console.draft(
              chalk.green.bold("Acertei de novo! 👏 \n")
            )

            await initialQuestion.run()

          } else {
            const filterPlatesPerCategory = this.collectionPlates.collection.filter(plate => plate.categoryReference === currentPlate.category)

            if(filterPlatesPerCategory.length > 0) {
              let count = 1
              for await (const plate of filterPlatesPerCategory) {
                await restartInitialQuestion.run(plate, currentPlate, count === filterPlatesPerCategory.length);
                count++;
              }
            }
            await alternativeDishStep.run(currentPlate)
          }
        }
  }

}

export { IntermediatePlateStep }