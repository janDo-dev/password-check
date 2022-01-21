export class InputCheck {
    checkEquality(pwInput, pwConfirm) {
        return pwInput === pwConfirm && pwInput !== "";
    }
    checkLowerCase(pwInput) {
        return pwInput !== pwInput.toUpperCase();
    }
    checkUpperCase(pwInput) {
        return pwInput !== pwInput.toLowerCase();
    }
    checkNumbers(pwInput) {
        return /\d/.test(pwInput);
    }
    checkLength(pwInput) {
        return pwInput.length >= 10;
    }
}
