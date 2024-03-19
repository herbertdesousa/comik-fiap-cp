loadData((json) => {
  const { items, home } = json;

  //#region main item
  const mainItem = items[home.main_item_index];

  if (!mainItem) {
    alert('home.main_item_index não encontrado');
    return;
  }

  if (mainItem.tag) {
    $('#main-item').append(`<span class="tag">${mainItem.tag}</span>`)
  }

  $('#main-item h2').html(mainItem.title);
  $('#main-item').append(
    `<img src="${mainItem.image_url}" alt="${mainItem.image_alt}">`,
  );

  //#endregion

  //#region carrousel items
  const carrouselItems = home.carrousel_items_index
    .map(itemIndex => items[itemIndex])
    .filter(item => item);
  
  carrouselItems.forEach(item => {
    $('#recommended-items').append(`
      <li class="list-item list-item-sm">
        <div class="list-item-image">
          <img src="${item.image_url}" alt="${item.image_alt}" />
          
          ${item.tag && `<span class="tag">${item.tag}</span>`}
        </div>

        <div class="list-item-bottom">
          <span>${item.title}</span>
          
          <span class="list-item-bottom-likes">${item.trending_info}</span>
        </div>
      </li>
    `)
  });

  //#endregion
  
});