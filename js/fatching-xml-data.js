export { modifiersArrays, modifierArgumentsArrays, requirementSetsArrays };
var modifiersArrays = [];
var modifierArgumentsArrays = [];
var requirementSetsArrays = [];
var requirementsArrays = [];
var requirementArgumentsArrays = [];
var requirementSetRequirementsArrays = [];
var modifierStringsArrays = [];
console.log(modifiersArrays.length)
document.addEventListener('DOMContentLoaded', () => {
    let beliefs = "../xml/beliefs.xml";
    fetch(beliefs)
        .then(response => response.text())
        .then(beliefsData => {
            let beliefsDataParser = new DOMParser();
            let xmlBeliefs = beliefsDataParser.parseFromString(beliefsData, "application/xml");
            processFetchedData(xmlBeliefs);
        });
});
function processFetchedData(xmlBeliefs) {
    let modifiers = xmlBeliefs.getElementsByTagName("Modifiers")[0].children;
    let modifierId = "ModifierId";
    let modifierType = "ModifierType";
    let subjectRequirementSetId = "SubjectRequirementSetId";
    let modifiersArray = [];
    createThreeArrays(modifiers, modifierId, modifierType, subjectRequirementSetId, modifiersArray);
    modifiersArrays.push.apply(modifiersArrays, modifiersArray);
    console.log(modifiersArrays.length)
    let modifierArguments = xmlBeliefs.getElementsByTagName("ModifierArguments")[0].children;
    let name = "Name";
    let value = "Value";
    createThreeArrays(modifierArguments, modifierId, name, value, modifierArgumentsArrays);
    let requirementSets = xmlBeliefs.getElementsByTagName("RequirementSets")[0].children;
    let requirementSetId = "RequirementSetId";
    let requirementSetType = "RequirementSetType";
    createTwoArrays(requirementSets, requirementSetId, requirementSetType, requirementSetsArrays);
}
function createTwoArrays(mainQuery, queryOne, queryTwo, array) {
    let firstArray = [];
    let secondArray = [];
    for (let i = 0; i < mainQuery.length; i++) {
        let variableOne = mainQuery[i].getElementsByTagName(queryOne)[0].textContent;
        let variableTwo = mainQuery[i].getElementsByTagName(queryTwo)[0].textContent;
        firstArray.push(variableOne);
        secondArray.push(variableTwo);
    }
    mergeBothArraysInOne(firstArray, secondArray, array);
}
function createThreeArrays(mainQuery, queryOne, queryTwo, queryThree, array) {
    let firstArray = [];
    let secondArray = [];
    let thirdArray = [];
    for (let i = 0; i < mainQuery.length; i++) {
        let variableOne = mainQuery[i].getElementsByTagName(queryOne)[0].textContent;
        let variableTwo = mainQuery[i].getElementsByTagName(queryTwo)[0].textContent;
        if (mainQuery[i].getElementsByTagName(queryThree).length !== 0) {
            let variableThree;
            variableThree = mainQuery[i].getElementsByTagName(queryThree)[0].firstChild.textContent;
            thirdArray.push(variableThree);
        }
        else {
            let variableThree = "";
            thirdArray.push(variableThree);
        }
        firstArray.push(variableOne);
        secondArray.push(variableTwo);
    }
    mergeAllThreeArraysInOne(firstArray, secondArray, thirdArray, array);
}
function mergeBothArraysInOne(firstArray, secondArray, mainArray) {
    for (let i = 0; i < firstArray.length; i++) {
        let row = [];
        row.push(firstArray[i], secondArray[i]);
        mainArray.push(row);
    }
}
function mergeAllThreeArraysInOne(firstArray, secondArray, thirdArray, mainArray) {
    for (let i = 0; i < firstArray.length; i++) {
        let row = [];
        row.push(firstArray[i], secondArray[i], thirdArray[i]);
        mainArray.push(row);
    }
}
