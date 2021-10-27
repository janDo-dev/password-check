(function () {
  init();

  function init() {
    const pwInput: HTMLInputElement = document.querySelector("#pw-input");
    const pwConfirm: HTMLInputElement = document.querySelector("#pw-confirm");
    const pwDisplayToggle: HTMLInputElement =
      document.querySelector("#pw-display-toggle");

    pwInput.addEventListener("keyup", passwordCheck);
    pwConfirm.addEventListener("keyup", passwordCheck);
    pwDisplayToggle.addEventListener("click", togglePwDisplay);
  }

  function passwordCheck() {
    const pwInput: HTMLInputElement = document.querySelector("#pw-input");
    const pwConfirm: HTMLInputElement = document.querySelector("#pw-confirm");
    const pwInputVal: string = pwInput.value.trim();
    const pwConfirmVal: string = pwConfirm.value.trim();

    checkEquality(pwInputVal, pwConfirmVal);
  }

  function checkEquality(pwInputVal: string, pwConfirmVal: string) {
    const equalCheck = document.querySelector("#equal-check");

    if (pwInputVal === pwConfirmVal && pwInputVal !== "") {
      equalCheck.classList.add("check-passed");
      checkLowerCase(pwInputVal);
      checkUpperCase(pwInputVal);
      checkNumbers(pwInputVal);
      checkLength(pwInputVal);
    } else {
      const checkListItems = document.querySelectorAll(".pw-checklist__item");
      checkListItems.forEach((checkListItem) =>
        checkListItem.classList.remove("check-passed")
      );
    }
  }

  function checkLowerCase(pwInputVal: string) {
    const lowerCaseCheck: HTMLElement =
      document.querySelector("#lower-case-check");

    if (pwInputVal !== pwInputVal.toUpperCase()) {
      lowerCaseCheck.classList.add("check-passed");
    } else {
      lowerCaseCheck.classList.remove("check-passed");
    }
  }

  function checkUpperCase(pwInputVal: string) {
    const upperCaseCheck: HTMLElement =
      document.querySelector("#upper-case-check");

    if (pwInputVal !== pwInputVal.toLowerCase()) {
      upperCaseCheck.classList.add("check-passed");
    } else {
      upperCaseCheck.classList.remove("check-passed");
    }
  }

  function checkNumbers(pwInputVal: string) {
    const numbersCheck: HTMLElement = document.querySelector("#numbers-check");

    if (/\d/.test(pwInputVal)) {
      numbersCheck.classList.add("check-passed");
    } else {
      numbersCheck.classList.remove("check-passed");
    }
  }

  function checkLength(pwInputVal: string) {
    const lengthCheck: HTMLElement = document.querySelector("#length-check");

    if (pwInputVal.length >= 10) {
      lengthCheck.classList.add("check-passed");
    } else {
      lengthCheck.classList.remove("check-passed");
    }
  }

  function togglePwDisplay() {
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
})();
