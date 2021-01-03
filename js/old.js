let mainFormPage = document.querySelector(".mainFormPage");
mainFormPage.classList.remove("hide");
setTimeout(function () { mainFormPage.style.opacity = 1 }, 50);
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
            setTimeout(function () {
                mainFormPage.style.opacity = 0;
                xmlFormPage.style.opacity = 1;
            }, 50);
        } else if (selectedOptionAll[0].innerHTML == "ArtDef") {
            mainFormPage.classList.add("hide");
            artDefFormPage.classList.remove("hide");
            setTimeout(function () {
                mainFormPage.style.opacity = 0;
                artDefFormPage.style.opacity = 1;
            }, 50);
        }
    });
let btnPrivXml = document
    .querySelector(".xmlFormPage .btnPriv")
    .addEventListener("click", () => {
        xmlFormPage.classList.add("hide");
        mainFormPage.classList.remove("hide");
        setTimeout(function () {
            xmlFormPage.style.opacity = 0;
            mainFormPage.style.opacity = 1;
        }, 50);
    });
let btnNextXml = document
    .querySelector(".xmlFormPage .btnNext")
    .addEventListener("click", () => {
        if (selectedOptionAll[1].innerHTML == "Belief") {
            xmlFormPage.classList.add("hide");
            setTimeout(function () {
                xmlFormPage.style.opacity = 0;
            }, 50);
            showXmlBeliefFormPages();
        } else if (selectedOptionAll[1].innerHTML == "Building") {
            xmlFormPage.classList.add("hide");
            setTimeout(function () {
                xmlFormPage.style.opacity = 0;
            }, 50);
            showXmlBuildingFormPages();
        } else if (selectedOptionAll[1].innerHTML == "Civilization") {
            xmlFormPage.classList.add("hide");
            setTimeout(function () {
                xmlFormPage.style.opacity = 0;
            }, 50);
            showXmlCivilizationFormPages();
        } else if (selectedOptionAll[1].innerHTML == "District") {
            xmlFormPage.classList.add("hide");
            setTimeout(function () {
                xmlFormPage.style.opacity = 0;
            }, 50);
            showXmlDistrictFormPages();
        } else if (selectedOptionAll[1].innerHTML == "Improvement") {
            xmlFormPage.classList.add("hide");
            setTimeout(function () {
                xmlFormPage.style.opacity = 0;
            }, 50);
            showXmlImprovementFormPages();
        }
    });
let btnPrivArtDef = document
    .querySelector(".artDefFormPage .btnPriv")
    .addEventListener("click", () => {
        artDefFormPage.classList.add("hide");
        mainFormPage.classList.remove("hide");
        setTimeout(function () {
            artDefFormPage.style.opacity = 0;
            mainFormPage.style.opacity = 1;
        }, 50);
    });
let btnNextArtDef = document
    .querySelector(".artDefFormPage .btnNext")
    .addEventListener("click", () => {
        if (selectedOptionAll[2].innerHTML == "XML") {
            artDefFormPage.classList.add("hide");
            setTimeout(function () {
                artDefFormPage.style.opacity = 0;
            }, 50);
        } else if (selectedOptionAll[2].innerHTML == "ArtDef") {
            artDefFormPage.classList.add("hide");
            setTimeout(function () {
                artDefFormPage.style.opacity = 0;
            }, 50);
        }
    });
function showXmlBeliefFormPages() {
    i = 0;
    xmlBeliefFormPages[i].classList.remove("hide");
    setTimeout(function () {
        xmlBeliefFormPages[i].style.opacity = 1;
    }, 50);
}
function showXmlBuildingFormPages() {
    let cXBP = 0;
    if (cXBP === 0) {
        xmlBuildingFormPages[0].classList.remove("hide");
        setTimeout(function () {
            xmlBuildingFormPages[0].style.opacity = 1;
        }, 50);
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
                setTimeout(function () {
                    xmlBuildingFormPages[cXBP].style.opacity = 0;
                    xmlFormPage.style.opacity = 1;
                }, 50);
            } else {
                setTimeout(function () {
                    xmlBuildingFormPages[cXBP].classList.add("hide");
                    xmlBuildingFormPages[cXBP].style.opacity = 0;
                    cXBP--;
                }, 0);
                setTimeout(function () {
                    xmlBuildingFormPages[cXBP].classList.remove("hide");
                    xmlBuildingFormPages[cXBP].style.opacity = 1;
                }, 50);
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

