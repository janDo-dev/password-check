(function () {
    init();
    function init() {
        var pwInput = document.querySelector("#pw-input");
        var pwConfirm = document.querySelector("#pw-confirm");
        var pwDisplayToggle = document.querySelector("#pw-display-toggle");
        pwInput.addEventListener("keyup", passwordCheck);
        pwConfirm.addEventListener("keyup", passwordCheck);
        pwDisplayToggle.addEventListener("click", togglePwDisplay);
    }
    function passwordCheck() {
        var pwInput = document.querySelector("#pw-input");
        var pwConfirm = document.querySelector("#pw-confirm");
        var pwInputVal = pwInput.value.trim();
        var pwConfirmVal = pwConfirm.value.trim();
        checkEquality(pwInputVal, pwConfirmVal);
    }
    function checkEquality(pwInputVal, pwConfirmVal) {
        var equalCheck = document.querySelector("#equal-check");
        if (pwInputVal === pwConfirmVal && pwInputVal !== "") {
            equalCheck.classList.add("check-passed");
            checkLowerCase(pwInputVal);
            checkUpperCase(pwInputVal);
            checkNumbers(pwInputVal);
            checkLength(pwInputVal);
        }
        else {
            var checkListItems = document.querySelectorAll(".pw-checklist__item");
            checkListItems.forEach(function (checkListItem) {
                return checkListItem.classList.remove("check-passed");
            });
        }
    }
    function checkLowerCase(pwInputVal) {
        var lowerCaseCheck = document.querySelector("#lower-case-check");
        if (pwInputVal !== pwInputVal.toUpperCase()) {
            lowerCaseCheck.classList.add("check-passed");
        }
        else {
            lowerCaseCheck.classList.remove("check-passed");
        }
    }
    function checkUpperCase(pwInputVal) {
        var upperCaseCheck = document.querySelector("#upper-case-check");
        if (pwInputVal !== pwInputVal.toLowerCase()) {
            upperCaseCheck.classList.add("check-passed");
        }
        else {
            upperCaseCheck.classList.remove("check-passed");
        }
    }
    function checkNumbers(pwInputVal) {
        var numbersCheck = document.querySelector("#numbers-check");
        if (/\d/.test(pwInputVal)) {
            numbersCheck.classList.add("check-passed");
        }
        else {
            numbersCheck.classList.remove("check-passed");
        }
    }
    function checkLength(pwInputVal) {
        var lengthCheck = document.querySelector("#length-check");
        if (pwInputVal.length >= 10) {
            lengthCheck.classList.add("check-passed");
        }
        else {
            lengthCheck.classList.remove("check-passed");
        }
    }
    function togglePwDisplay() {
        var pwInput = document.querySelector("#pw-input");
        var pwConfirm = document.querySelector("#pw-confirm");
        var pwDisplayToggle = document.querySelector("#pw-display-toggle");
        if (pwInput.getAttribute("type") === "password" &&
            pwConfirm.getAttribute("type") === "password") {
            pwInput.setAttribute("type", "text");
            pwConfirm.setAttribute("type", "text");
            pwDisplayToggle.textContent = "Hide Passwords";
        }
        else {
            pwInput.setAttribute("type", "password");
            pwConfirm.setAttribute("type", "password");
            pwDisplayToggle.textContent = "Show Passwords";
        }
    }
})();
