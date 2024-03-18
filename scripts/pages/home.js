loadData((json) => {
  const { items, home } = json;

  //#region main item
  const item = items[home.main_item_index];

  if (!item) {
    alert('home.main_item_index não encontrado');
    return;
  }

  if (item.tag) {
    $('#main-item').append(`<span class="tag">${item.tag}</span>`)
  }

  $('#main-item h2').html(item.title);
  $('#main-item').append(
    `<img src="${item.image_url}" alt="${item.image_alt}">`,
  );

  //#endregion
});