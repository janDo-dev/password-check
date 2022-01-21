import { PasswordCheckInterface } from "./Interfaces";
import { IndicatorToggle } from "./IndicatorToggle";
import { InputCheck } from "./InputCheck";

export default class PasswordCheck implements PasswordCheckInterface {
  constructor() {
    this.init();
  }

  init(): void {
    const pwInput: HTMLInputElement = document.querySelector("#pw-input");
    const pwConfirm: HTMLInputElement = document.querySelector("#pw-confirm");
    const pwDisplayToggle: HTMLInputElement =
      document.querySelector("#pw-display-toggle");

    pwInput.addEventListener("keyup", this.checkPassword);
    pwConfirm.addEventListener("keyup", this.checkPassword);
    pwDisplayToggle.addEventListener("click", this.togglePwDisplay);
  }

  checkPassword(): void {
    const pwInput: HTMLInputElement = document.querySelector("#pw-input");
    const pwConfirm: HTMLInputElement = document.querySelector("#pw-confirm");
    const pwInputVal: string = pwInput.value.trim();
    const pwConfirmVal: string = pwConfirm.value.trim();

    // instanciate PasswordCheck and IndicatorToggle
    const pwCheck: InputCheck = new InputCheck();
    const checkIndicator: IndicatorToggle = new IndicatorToggle();

    // check if inputs are equal
    if (pwCheck.checkEquality(pwInputVal, pwConfirmVal)) {
      // set equality check indicators to true
      // => change the indicator from ❌ to ✅
      checkIndicator.setIndicator("equality", true);

      if (pwCheck.checkLowerCase(pwInputVal)) {
        checkIndicator.setIndicator("lowerCase", true);
      }

      if (pwCheck.checkUpperCase(pwInputVal)) {
        checkIndicator.setIndicator("upperCase", true);
      }

      if (pwCheck.checkNumbers(pwInputVal)) {
        checkIndicator.setIndicator("numbers", true);
      }

      if (pwCheck.checkLength(pwInputVal)) {
        checkIndicator.setIndicator("length", true);
      }
    }
  }

  togglePwDisplay(): void {
    const pwInput: HTMLInputElement = document.querySelector("#pw-input");
    const pwConfirm: HTMLInputElement = document.querySelector("#pw-confirm");
    const pwDisplayToggle: HTMLInputElement =
      document.querySelector("#pw-display-toggle");

    if (
      pwInput.getAttribute("type") === "password" &&
      pwConfirm.getAttribute("type") === "password"
    ) {
      pwInput.setAttribute("type", "text");
      pwConfirm.setAttribute("type", "text");
      pwDisplayToggle.textContent = "Hide Passwords";
    } else {
      pwInput.setAttribute("type", "password");
      pwConfirm.setAttribute("type", "password");
      pwDisplayToggle.textContent = "Show Passwords";
    }
  }
}
