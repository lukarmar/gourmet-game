import chalk from "chalk";

export const logInformation = (message: string): string => {
  return chalk.blue(message)
}