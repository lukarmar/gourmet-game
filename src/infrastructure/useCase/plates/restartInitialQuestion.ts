import chalk from "chalk";

import { ANSWER_NO, ANSWER_YES, QUESTION_PLATE, YES_OR_NO } from "../../data";
import { Plates } from "@domain/plates/object-value/plates";
import { TerminalController } from "../terminal/terminalUseCase";

import { initialQuestion, alternativeDishStep } from './injection'
import { logInformation } from "@infrastructure/utils/logInformation";


class RestartInitialQuestion {
  
  constructor(
    private terminalController: TerminalController
  ) {}

  async run(currentPlate: Plates, initialPlate: Plates, isCallFn: boolean): Promise<void> {
    const answer = await this.terminalController.question(
      logInformation(`${QUESTION_PLATE} ${currentPlate.category}? ${chalk.bold.underline(YES_OR_NO)} \n`)
      )

      if(answer.toLocaleLowerCase() === ANSWER_YES) {
        const answer = await this.terminalController.question(
          logInformation(`${QUESTION_PLATE} ${currentPlate.name}? ${chalk.bold.underline(YES_OR_NO)} \n`)
        )
          if(answer.toLocaleLowerCase() === ANSWER_YES || answer.toLocaleLowerCase() === ANSWER_NO) {
            if(answer.toLocaleLowerCase() === ANSWER_YES) {
              console.draft(
                chalk.green.bold("Acertei de novo! 👏 \n")
              )
              await initialQuestion.run()
            } else {
              if(isCallFn) {
                if(initialPlate.isRead) {
                  initialPlate.setIsRead(false)
                  await alternativeDishStep.run(initialPlate)
                } else {
                  initialPlate.setIsRead(true)
                  await initialQuestion.run()
                }
              }
            }
          } 
      } else {
        if(isCallFn) {
          if(initialPlate.isRead) {
            initialPlate.setIsRead(false)
            await alternativeDishStep.run(initialPlate)
          } else {
            initialPlate.setIsRead(true)
            await initialQuestion.run()
          }
        }
        return;
      }
  }

}

export { RestartInitialQuestion }