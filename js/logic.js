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
