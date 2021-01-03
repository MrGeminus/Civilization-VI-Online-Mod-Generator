import { modifiersArrays, modifierArgumentsArrays, requirementSetsArrays } from './fatching-xml-data.js';
let desiredID = "modifiers";
let desiredName = "selectedBeliefModifiers";
function appendOptionsToTheHTMLFile(array, desiredID, desiredName) {
    for (let i = 0; i < array.length; i++) {
        let documentFragment = document.createDocumentFragment();
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');
        label.textContent = array[i];
        li.className = 'option';
        input.setAttribute("id", `${desiredID}${[i]}`);
        input.setAttribute("name", `${desiredName}`);
        input.setAttribute("value", `${array[i].toLowerCase()}`);
        input.setAttribute("type", "checkbox");
        label.setAttribute("for", `${desiredID}${[i]}`);
        documentFragment.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);
        console.log(documentFragment);
    };
}
appendOptionsToTheHTMLFile(modifiersArrays, desiredID, desiredName);
