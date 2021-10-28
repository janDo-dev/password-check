export interface PasswordCheckInterface {
  init(): void;
  checkPassword(): void;
  togglePwDisplay(): void;
}

export interface InputCheckInterface {
  checkEquality(pwInput: string, pwConfirm: string): boolean;
  checkLowerCase(pwInput: string): boolean;
  checkUpperCase(pwInput: string): boolean;
  checkNumbers(pwInput: string): boolean;
  checkLength(pwInput: string): boolean;
}
