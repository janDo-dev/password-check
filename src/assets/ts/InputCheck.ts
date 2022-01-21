import { InputCheckInterface } from "./Interfaces";

export class InputCheck implements InputCheckInterface {
  checkEquality(pwInput: string, pwConfirm: string) {
    return pwInput === pwConfirm && pwInput !== "";
  }

  checkLowerCase(pwInput: string) {
    return pwInput !== pwInput.toUpperCase();
  }

  checkUpperCase(pwInput: string) {
    return pwInput !== pwInput.toLowerCase();
  }

  checkNumbers(pwInput: string) {
    return /\d/.test(pwInput);
  }

  checkLength(pwInput: string) {
    return pwInput.length >= 10;
  }
}
