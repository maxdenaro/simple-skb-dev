const btnSearch = document.querySelector('.header__btn--search');
const btnClose = document.querySelector('.search-form__close');
const searchForm = document.querySelector('.search-form');

btnSearch.addEventListener('click', () => {
  searchForm.classList.add('search-form--display');

  setTimeout(() => {
    searchForm.classList.add('search-form--visible');
  }, 300);
});

btnClose.addEventListener('click', () => {
  searchForm.classList.remove('search-form--visible');
  setTimeout(() => {
    searchForm.classList.remove('search-form--display');
    searchForm.reset();
  }, 300);
});
