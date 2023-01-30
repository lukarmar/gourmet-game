import chalk from "chalk";

import { Plates } from "@domain/plates/object-value/plates";
import { TerminalController } from "@infrastructure/useCase/terminal/terminalUseCase";
import { QUESTION_PLATE, ANSWER_NO, ANSWER_YES, YES_OR_NO, BYE_MESSAGE } from "@infrastructure/data";
import { intermediatePlateStep } from "./injection";
import { logInformation } from "@infrastructure/utils/logInformation";


const platesStartingLasagna = new Plates("Lasanha", "Massa")
const platesStartingCake = new Plates("Bolo de Chocolate", "Bolo")


class InitialQuestion {
  
  constructor(
    private terminalController: TerminalController
  ) {}

  async run(): Promise<void> {
    const answer = await this.terminalController.question(
      logInformation(`${QUESTION_PLATE} massa? ${chalk.bold.underline(YES_OR_NO)} \n`)
    )

    this.terminalController.closeTerminal(answer, BYE_MESSAGE)
     
    if(answer.toLocaleLowerCase() === ANSWER_YES || answer.toLocaleLowerCase() === ANSWER_NO){
      if(answer.toLocaleLowerCase() === ANSWER_YES) {
        await intermediatePlateStep.run(platesStartingLasagna)
      } else {
        await intermediatePlateStep.run(platesStartingCake)
      }
    }
  }

}

export { InitialQuestion }