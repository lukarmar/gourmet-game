import { CollectionPlates } from "@domain/plates/entity/collectionPlates.entity";
import { TerminalController } from "../../terminal/terminalUseCase";

import { InitialQuestion } from "../initialQuestion";
import { IntermediatePlateStep } from "../intermediatePlateStep";
import { RestartInitialQuestion } from "../restartInitialQuestion";
import { AlternativeDishStep } from "../alternativeDishStep";



const collectionPlates = new CollectionPlates()
const terminalController = new TerminalController()


const intermediatePlateStep = new IntermediatePlateStep(
  collectionPlates,
  terminalController
)

const initialQuestion = new InitialQuestion(
  terminalController
)

const restartInitialQuestion = new RestartInitialQuestion(terminalController)

const alternativeDishStep = new AlternativeDishStep(
  collectionPlates,
  terminalController
)


export {  
  intermediatePlateStep,
  initialQuestion,
  restartInitialQuestion,
  alternativeDishStep
}