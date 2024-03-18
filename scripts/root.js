//#region inverse scroll
const inverseScrollElement = document.querySelector('.inverse-scroll');

inverseScrollElement.addEventListener('wheel', (event) => {
  event.preventDefault();

  inverseScrollElement.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});
//#endregion

const JSON_PATH = window.location.origin + '/data.json';

async function main() {
  const response = await fetch(JSON_PATH);

  const json = await response.json()

  json.categories.forEach(category => {
    $('#list-categories').append(`
      <li class="list-item list-item-xs">
        <div class="list-item-image">
          <img src="${category.image_url}" alt="${category.image_alt}" />
        </div>

        <div class="list-item-bottom">
          <span class="font-bangers">${category.label}</span>
        </div>
      </li>
    `);
  });

  json.items.forEach((item, index) => {
    const liClass = (() => {
      if (index === 0 || index % 12 === 0) {
        return 'list-item list-item-full-height size-span-2';
      }

      return 'list-item list-item-sm-height';
    })();

    $('#list-items').append(`
      <li class="${liClass}">
        <div class="list-item-image">
          <img src="${item.image_url}" alt="${item.image_alt}" />
          ${item.tags.map(tag => (
            `<span class="tag">${tag}</span>`
          ))}
        </div>

        <div class="list-item-bottom">
          <span>${item.title}</span>
          <span class="list-item-bottom-likes">${item.trending_info}</span>
        </div>
      </li>
    `);
  });
}

main();

