import readline from 'readline'
import DraftLog  from "draftlog";
import { COMMAND_CLOSE_TERMINAL } from '../../data';
import chalk from 'chalk';

class TerminalController {
  private terminal: readline.Interface

  constructor(){
    DraftLog(console).addLineListener(process.stdin)

    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    })
  }

 async question(message:string = ""): Promise<string>{
    return new Promise(resolve => this.terminal.question(message, resolve))
  }

  closeTerminal(decision: string, message: string): void {
    if(decision.toLowerCase().trim() === COMMAND_CLOSE_TERMINAL){
      console.draft(chalk.italic.greenBright(message))
      process.exit(201)
    }
  }
}

export { TerminalController }