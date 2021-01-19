// Defining variables
let formPages = document.querySelectorAll('.formPage');
let currentPage = 0;
let selectedOptions;
let textContainer;
let inputFields;
function logic() {
  selectedOptions = formPages[currentPage].querySelector('.selectedOption');
  textContainer = formPages[currentPage].querySelector('.text-Container');
  inputFields = formPages[currentPage].querySelector('.hiddenInput');
  let nextButtons = formPages[currentPage].lastChild.previousElementSibling;
  let previousButtons = nextButtons.previousElementSibling;
  // Showing the first page
  if (currentPage === 0) {
    formPages[currentPage].classList.remove('hide');
    setTimeout(function () {
      formPages[currentPage].style.opacity = 1;
    }, 50);
    nextButtons.addEventListener("click", nextPage)
  }
  // Showing other pages
  else if (currentPage > 0) {
    formPages[currentPage].classList.remove('hide');
    setTimeout(function () {
      formPages[currentPage].style.opacity = 1;
    }, 50);
    nextButtons.addEventListener("click", nextPage);
    previousButtons.addEventListener("click", previousPage);
  }
}
// Next page logic
function nextPage() {
  if (currentPage === 0 && selectedOptions.textContent === 'XML') {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage += 1;
      logic();
    }, 50);
  }
  else if (currentPage === 1 && selectedOptions.textContent === 'Belief') {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage += 2;
      logic();
    }, 50);
  }
  else if (currentPage === 3) {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage += 5;
      logic();
    }, 50);
  }
  else if (currentPage === 8 && !(selectedOptions.textContent === 'Select a belief type')) {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage += 1;
      logic();
    }, 50);
  }
  else if (currentPage === 0 && selectedOptions.textContent === 'ArtDef') {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage += 2;
      logic();
    }, 50)
  }
}
// Previous page logic
function previousPage() {
  if (currentPage === 1) {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage -= 1;
      logic();
    }, 50);
  }
  else if (currentPage === 2) {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage -= 2;
      logic();
    }, 50);
  }
  else if (currentPage === 3) {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage -= 2;
      logic();
    }, 50);
  }
  else if (currentPage === 8) {
    formPages[currentPage].style.opacity = 0;
    setTimeout(function () {
      formPages[currentPage].classList.add('hide');
      currentPage -= 5;
      logic();
    }, 50);
  }
}
logic();
let moreMod = document.querySelector(".btnMore");
function createTab() {
  let tabContainer = document.querySelector(".tabContainer");
  tabContainer.children[1].style.display = "none";
  tabContainer.children[1].classList.remove("full-width");
  let tabDiv = document.createElement('div');
  let buttonDiv = document.createElement('button');
  let closeIcon = document.createElement('span');
  tabDiv.className = "tab push-down";
  buttonDiv.innerText = "Modifier"
  buttonDiv.className = "btnTab activeTab";
  buttonDiv.setAttribute("type", "button");
  buttonDiv.setAttribute("data-for-tab", "1");
  closeIcon.className = "closeTab";
  buttonDiv.appendChild(closeIcon);
  tabContainer.appendChild(tabDiv);
  tabContainer.children[0].appendChild(buttonDiv)
  let closeIcons = document.querySelectorAll(".closeTab");
  console.log(closeIcons)
  closeIcons.forEach(closeIcon => {
    let buttonDiv = closeIcon.parentElement;
    function closeTab() {
      tabDiv.remove();
      buttonDiv.remove();
    }
    closeIcon.addEventListener("click", closeTab)
    console.log(closeIcon)
  });
}
moreMod.addEventListener("click", createTab)
