let selectedOptionAll = document.querySelectorAll(".selectedOption");
selectedOptionAll.forEach((selectedOption) => {
    let optionContainer = selectedOption.previousElementSibling;
    let optionList = optionContainer.querySelectorAll(".option");
    let searchInput = selectedOption.nextElementSibling;
    let selectMenu = selectedOption.parentElement;
    selectedOption.addEventListener("click", () => {
        if (optionContainer.classList.contains("active")) {
            optionContainer.classList.remove("active");
        } else {
            var currentActive = document.querySelector(".optionContainer.active");
            if (currentActive) {
                currentActive.classList.remove("active");
            }
            optionContainer.classList.add("active");
            if (!(searchInput == null)) {
                let userInput = searchInput.querySelector(".searchInput");
                userInput.value = "";
                searchQuarry("");
            }
            if (
                optionContainer.classList.contains("active") &&
                !(searchInput == null)
            ) {
                let userInput = searchInput.querySelector(".searchInput");
                userInput.focus();
            }
            window.addEventListener("mouseup", (event) => {
                if (
                    event.target != selectMenu &&
                    event.target.parentNode != selectMenu &&
                    event.target.parentNode.parentNode != selectMenu
                ) {
                    optionContainer.classList.remove("active");
                }
            });
        }
    });

    optionList.forEach((option) => {
        option.addEventListener("click", () => {
            selectedOption.innerHTML = option.querySelector("label").innerHTML;
            optionContainer.classList.remove("active");
        });
    });

    if (!(searchInput == null)) {
        searchInput.addEventListener("keyup", function (x) {
            searchQuarry(x.target.value);
        });
    }
    const searchQuarry = (searchTerm) => {
        searchTerm = searchTerm.toUpperCase();
        optionList.forEach((option) => {
            let y = option.firstElementChild.nextElementSibling.innerText.toUpperCase();
            if (y.startsWith(searchTerm)) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        });
    };
});

let numberContainers = document.querySelectorAll(".number-Container");
numberContainers.forEach((numberContainer) => {
    let currentAmount = numberContainer.lastElementChild;
    currentAmount.value = 0;
    let prevValue = Number(currentAmount.value);
    let pressedKey = currentAmount;
    var backspacePressed;
    pressedKey.onkeydown = function () {
        let key = event.keyCode || event.charCode;
        if (key == 8) {
            backspacePressed = true;
        } else {
            backspacePressed = false;
        }
    };
    currentAmount.addEventListener("focus", () => {
        currentAmount.value = "";
    });
    currentAmount.addEventListener("input", () => {
        let newValue = currentAmount.value;
        if (/^-/.test(newValue)) {
            if (newValue.length == 6 && /^-[1-9][0-9]{4}?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 5 && /^-[1-9][0-9]{3}?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 4 && /^-[1-9][0-9]{2}?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 3 && /^-[1-9][0-9]{1}?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 2 && /^-[1-9][0-9]?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 1 && /^-?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 0 && /^-?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else {
                newValue = prevValue;
                currentAmount.value = newValue;
            }
        } else if (/^[0-9]/.test(newValue)) {
            if (newValue.length == 5 && /^[1-9][0-9]{4}?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 4 && /^[1-9][0-9]{3}?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 3 && /^[1-9][0-9]{2}?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 2 && /^[1-9][0-9]{1}?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 1 && /^[0-9]?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else if (newValue.length == 0 && /^[0-9]?/.test(newValue)) {
                prevValue = newValue;
                currentAmount.value = newValue;
            } else {
                newValue = prevValue;
                currentAmount.value = newValue;
            }
        } else if (backspacePressed == true) {
            prevValue = "";
            newValue = prevValue;
            currentAmount.value = newValue;
        } else if (prevValue == 0) {
            prevValue = "";
            newValue = prevValue;
            currentAmount.value = newValue;
        } else {
            newValue = prevValue;
            currentAmount.value = newValue;
        }
    });
    let lower = numberContainer.firstElementChild;
    lower.addEventListener("click", decrementAmount);
    let higher = lower.nextElementSibling;
    higher.addEventListener("click", incrementAmount);
    function incrementAmount() {
        if (Number(currentAmount.value) < 99999) {
            let x = Number(currentAmount.value);
            x++;
            currentAmount.value = x;
        } else {
            let x = -99999;
            currentAmount.value = x;
        }
    }
    function decrementAmount() {
        if (Number(currentAmount.value) > -99999) {
            let x = Number(currentAmount.value);
            x--;
            currentAmount.value = x;
        } else {
            let x = 99999;
            currentAmount.value = x;
        }
    }
});
// Tooltip

