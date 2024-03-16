//#region inverse scroll
const inverseScrollElement = document.querySelector('#inverse-scroll');

inverseScrollElement.addEventListener('wheel', (event) => {
  event.preventDefault();

  inverseScrollElement.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});
//#endregion
