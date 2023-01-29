import chalk from "chalk";

import { initialQuestion } from '@infrastructure/useCase/plates/injection'
import { sleep } from '@infrastructure/utils/sleep'
import { COMMAND_CLOSE_TERMINAL } from "@infrastructure/data";



async function mainLoop(): Promise<any> {
  try {
    
    console.draft(
      chalk.magenta("Pense em um prato que você gosta 🙇")
    )
    console.draft(
      chalk.magenta("------------------------")
    )
    console.draft(
      chalk.gray.cyan(`Para sair digite ${chalk.bold.underline.red(COMMAND_CLOSE_TERMINAL)} \n`)
    )

    await sleep(4000)

    await initialQuestion.run()

    return mainLoop()

  } catch (error) {
    console.error("DEU RUIM!!!", error)
    return mainLoop()
  }
}

mainLoop().then()


