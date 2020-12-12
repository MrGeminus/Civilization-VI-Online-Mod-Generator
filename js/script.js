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
let mainFormPage = document.querySelector(".mainFormPage");
let xmlFormPage = document.querySelector(".xmlFormPage");
let artDefFormPage = document.querySelector(".artDefFormPage");
let xmlBeliefFormPages = document.querySelectorAll(".xmlBeliefFormPages");
let xmlBuildingFormPages = document.querySelectorAll(".xmlBuildingFormPages");
let xmlCivilizationFormPages = document.querySelectorAll(
  ".xmlCivilizationFormPages"
);
let xmlDistrictFormPages = document.querySelectorAll(".xmlDistrictFormPages");
let xmlImprovementFormPages = document.querySelectorAll(
  ".xmlImprovementFormPages"
);
let btnNextMain = document
  .querySelector(".mainFormPage .btnNext")
  .addEventListener("click", () => {
    if (selectedOptionAll[0].innerHTML == "XML") {
      mainFormPage.classList.add("hide");
      xmlFormPage.classList.remove("hide");
    } else if (selectedOptionAll[0].innerHTML == "ArtDef") {
      mainFormPage.classList.add("hide");
      artDefFormPage.classList.remove("hide");
    }
  });
let btnPrivXml = document
  .querySelector(".xmlFormPage .btnPriv")
  .addEventListener("click", () => {
    xmlFormPage.classList.add("hide");
    mainFormPage.classList.remove("hide");
  });
let btnNextXml = document
  .querySelector(".xmlFormPage .btnNext")
  .addEventListener("click", () => {
    if (selectedOptionAll[1].innerHTML == "Belief") {
      xmlFormPage.classList.add("hide");
      showXmlBeliefFormPages();
    } else if (selectedOptionAll[1].innerHTML == "Building") {
      xmlFormPage.classList.add("hide");
      showXmlBuildingFormPages();
    } else if (selectedOptionAll[1].innerHTML == "Civilization") {
      xmlFormPage.classList.add("hide");
      showXmlCivilizationFormPages();
    } else if (selectedOptionAll[1].innerHTML == "District") {
      xmlFormPage.classList.add("hide");
      showXmlDistrictFormPages();
    } else if (selectedOptionAll[1].innerHTML == "Improvement") {
      xmlFormPage.classList.add("hide");
      showXmlImprovementFormPages();
    }
  });
let btnPrivArtDef = document
  .querySelector(".artDefFormPage .btnPriv")
  .addEventListener("click", () => {
    artDefFormPage.classList.add("hide");
    mainFormPage.classList.remove("hide");
  });
let btnNextArtDef = document
  .querySelector(".artDefFormPage .btnNext")
  .addEventListener("click", () => {
    if (selectedOptionAll[2].innerHTML == "XML") {
      artDefFormPage.classList.add("hide");
    } else if (selectedOptionAll[2].innerHTML == "ArtDef") {
      artDefFormPage.classList.add("hide");
    }
  });
function showXmlBeliefFormPages() {
  i = 0;
  xmlBeliefFormPages[i].classList.remove("hide");
}
function showXmlBuildingFormPages() {
  let cXBP = 0;
  if (cXBP == 0) {
    xmlBuildingFormPages[0].classList.remove("hide");
  }
  let buildingName = xmlBuildingFormPages[0].querySelector(".textInput");
  let customDistrictName = xmlBuildingFormPages[1].querySelector(".textInput");
  customDistrictName.style.visibility = "hidden";
  let btnPrivBuildings = document.querySelectorAll(
    ".xmlBuildingFormPages .btnPriv"
  );
  btnPrivBuildings.forEach((btnPrivBuilding) => {
    btnPrivBuilding.addEventListener("click", () => {
      if (cXBP == 0) {
        xmlBuildingFormPages[cXBP].classList.add("hide");
        xmlFormPage.classList.remove("hide");
      } else {
        xmlBuildingFormPages[cXBP].classList.add("hide");
        cXBP--;
        xmlBuildingFormPages[cXBP].classList.remove("hide");
      }
    });
  });
  let btnNextBuildings = document.querySelectorAll(
    ".xmlBuildingFormPages .btnNext"
  );
  btnNextBuildings.forEach((btnNextBuilding) => {
    btnNextBuilding.addEventListener("click", () => {
      if (cXBP == 0 && buildingName.value == "") {
        buildingName.classList.add("requiredField");
        setTimeout(function () {
          buildingName.classList.remove("requiredField");
        }, 5000);
      } else if (
        cXBP == 1 &&
        !selectedOptionAll[3].innerHTML == "Select a District"
      ) {
        checkCustomDistrictName();
        if (!fieldempty) {
          xmlBuildingFormPages[cXBP].classList.add("hide");
          cXBP++;
          xmlBuildingFormPages[cXBP].classList.remove("hide");
        }
      } else {
        xmlBuildingFormPages[cXBP].classList.add("hide");
        cXBP++;
        xmlBuildingFormPages[cXBP].classList.remove("hide");
      }
    });
    function checkCustomDistrictName() {
      selectedOptionAll[3].addEventListener("change", () => {
        if (selectedOptionAll[3].innerHTML == "Custom") {
          customDistrictName.style.visibility = "visible";
          if ((customDistrictName = "")) {
            buildingName.classList.add("requiredField");
            setTimeout(function () {
              buildingName.classList.remove("requiredField");
            }, 5000);
            checkCustomDistrictName = true;
          } else {
            checkCustomDistrictName = false;
          }
        } else {
          customDistrictName.style.visibility = "hidden";
        }
      });
    }
  });
}
