(function () {
  "use strict";

  const pwInput = document.querySelector("#pw-input");
  const pwConfirm = document.querySelector("#pw-confirm");
  const pwDisplayToggle = document.querySelector("#pw-display-toggle");

  pwInput.addEventListener("keyup", passwordCheck);
  pwConfirm.addEventListener("keyup", passwordCheck);
  pwDisplayToggle.addEventListener("click", togglePwDisplay);

  function passwordCheck() {
    const pwInputVal = pwInput.value.trim();
    const pwConfirmVal = pwConfirm.value.trim();

    checkEquality(pwInputVal, pwConfirmVal);
  }

  function checkEquality(pwInputVal, pwConfirmVal) {
    const equalCheck = document.querySelector("#equal-check");

    if (pwInputVal === pwConfirmVal) {
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

  function checkLowerCase(pwInputVal) {
    const lowerCaseCheck = document.querySelector("#lower-case-check");

    if (pwInputVal !== pwInputVal.toUpperCase()) {
      lowerCaseCheck.classList.add("check-passed");
    } else {
      lowerCaseCheck.classList.remove("check-passed");
    }
  }

  function checkUpperCase(pwInputVal) {
    const upperCaseCheck = document.querySelector("#upper-case-check");

    if (pwInputVal !== pwInputVal.toLowerCase()) {
      upperCaseCheck.classList.add("check-passed");
    } else {
      upperCaseCheck.classList.remove("check-passed");
    }
  }

  function checkNumbers(pwInputVal) {
    const numbersCheck = document.querySelector("#numbers-check");

    if (/\d/.test(pwInputVal)) {
      numbersCheck.classList.add("check-passed");
    } else {
      numbersCheck.classList.remove("check-passed");
    }
  }

  function checkLength(pwInputVal) {
    const lengthCheck = document.querySelector("#length-check");

    if (pwInputVal.length >= 10) {
      lengthCheck.classList.add("check-passed");
    } else {
      lengthCheck.classList.remove("check-passed");
    }
  }

  function togglePwDisplay() {
    pwInput.getAttribute("type") === "password"
      ? pwInput.setAttribute("type", "text")
      : pwInput.setAttribute("type", "password");

    pwConfirm.getAttribute("type") === "password"
      ? pwConfirm.setAttribute("type", "text")
      : pwConfirm.setAttribute("type", "password");
  }
})();
