export class IndicatorToggle {
    setIndicator(check, state) {
        if (check === "equality" && state) {
            const equalCheck = document.querySelector("#equal-check");
            equalCheck.classList.add("check-passed");
        }
        else {
            const checkListItems = document.querySelectorAll(".pw-checklist__item");
            checkListItems.forEach((checkListItem) => checkListItem.classList.remove("check-passed"));
        }
        if (check === "lowerCase" && state) {
            const equalCheck = document.querySelector("#lower-case-check");
            equalCheck.classList.add("check-passed");
        }
        if (check === "upperCase" && state) {
            const equalCheck = document.querySelector("#upper-case-check");
            equalCheck.classList.add("check-passed");
        }
        if (check === "numbers" && state) {
            const equalCheck = document.querySelector("#numbers-check");
            equalCheck.classList.add("check-passed");
        }
        if (check === "length" && state) {
            const equalCheck = document.querySelector("#length-check");
            equalCheck.classList.add("check-passed");
        }
    }
}
