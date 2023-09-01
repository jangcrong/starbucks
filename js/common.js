const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); //focused 클래스를 추가하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색'); // Attribute (HTML속성)을 지정한다.
}); //searchInputEl요소가 포커스가 되면 두번째 인수로 작성하는 어떤 함수가 실행 될것이다.

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused'); 
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023