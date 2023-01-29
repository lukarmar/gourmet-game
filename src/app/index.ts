import chalk from "chalk";

import { TerminalController } from "@infrastructure/useCase/terminal/terminalUseCase";
import { initialQuestion } from '@infrastructure/useCase/plates/injection'
import { sleep } from '../infrastructure/utils/sleep'

const temrinalController = new TerminalController()

async function mainLoop(): Promise<any> {
  try {
    
    console.draft(
      chalk.magenta("Pense em um prato que você gosta 🙇")
    )
    console.draft(
      chalk.magenta("------------------------")
    )
    console.draft(
      chalk.gray.cyan(`Para sair digite ${chalk.bold.underline.red("sair")} \n`)
    )

    await sleep(4000)

    await initialQuestion.run()

    // if(answer === "n") {
    //   temrinalController.closeTerminal()
    //   console.log("Finish")
    //   return;
    // }

    return mainLoop()

  } catch (error) {
    console.error("DEU RUIM!!!", error)
    return mainLoop()
  }
}

mainLoop().then()


