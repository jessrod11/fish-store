// Filter fish that are "on sale"

const filterFish = () => { // no 'e' needs to be passed through because there won't be any dom traversal
$('.fish').not('.on-sale').toggle(); // says to add or hide
};

$('#show-sale').click(filterFish);

// Add fish to "Basket"
const moveToCart = (e) => {
  let fishCard = $(e.target).closest('.fish');
  console.log('fish card', fishCard);
  $('#snagged').append(fishCard);
};

$('button.add').click(moveToCart);