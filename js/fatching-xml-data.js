document.addEventListener('DOMContentLoaded', () => {
    let beliefs = "../xml/beliefs.xml";
    fetch(beliefs)
        .then(response => response.text())
        .then(beliefsData => {
            let beliefsDataParser = new DOMParser();
            let xmlBeliefs = beliefsDataParser.parseFromString(beliefsData, "application/xml");
            let modifiers = xmlBeliefs.getElementsByTagName("Modifiers")[0].children;
            let modifierArguments = xmlBeliefs.getElementsByTagName("ModifierArguments")[0].children;
            processFetchedData(modifiers);
            processFetchedData(modifierArguments);
        })
});
function processFetchedData(tag) {
    let textArray = [];
    for (let i = 0; i < tag.length; i++) {
        textArray.push(tag[i].getElementsByTagName("ModifierId")[0].firstChild.textContent)
    }
    appendOptionsToTheHTMLFile(textArray, "beliefModifiers", "selectedBeliefModifiers", "beliefModifiers")
    //appendOptionsToTheHTMLFile(textArray, "beliefModifierArguments", "selectedBeliefModifierArguments", "beliefModifierArguments")
}
function appendOptionsToTheHTMLFile(labelText, inputID, inputName, parentElementID) {
    let getParentElement = document.getElementById(`${parentElementID}`);
    for (let i = 0; i < labelText.length; i++) {
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');
        label.textContent = labelText[i];
        li.className = 'option';
        input.setAttribute("id", `${inputID}${[i + 2]}`);
        input.setAttribute("name", `${inputName}`);
        input.setAttribute("value", `${labelText[i].toLowerCase()}`);
        input.setAttribute("type", "checkbox");
        label.setAttribute("for", `${inputID}${[i + 2]}`);
        getParentElement.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);
    };
}
let arr = ["../xml/Beliefs.xml", "../xml/Expansion1_Beliefs.xml"],
    cnt = 0, xhr = new XMLHttpRequest(), method = "GET";

function formatXml(xmlDoc) {
    let x = xmlDoc.getElementsByTagName("ModifierId");
    //console.log(x);
}

function getXml() {
    xhr.open(method, arr[cnt], true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            formatXml(xhr.responseXML);
            cnt++;
            if (cnt < arr.length) getXml();
        }
    };
    xhr.send();
}
getXml();
