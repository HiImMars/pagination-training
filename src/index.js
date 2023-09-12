let items = $('.list-wrapper .list-item');
let numItems = items.length;
let perPage = 3;

items.slice(perPage).hide();

$('#pagination-container').pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: '<',
  nextText: '>',
  onPageClick: function (pageNumber) {
    let showFrom = perPage * (pageNumber - 1);
    let showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});
