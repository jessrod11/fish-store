// Filter fish that are "on sale"
const filterFish = () => { // no 'e' needs to be passed through because there won't be any dom traversal
  $('#available .fish').not('.on-sale').toggle(); // says to add or hide items if show sale fish button is clicked.
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All Fish';
    } else {
      returnText = 'Show Sale Fish';
    };
    return returnText;
  });
};

$('#show-sale').click(() => {
  changeButtonText();
  filterFish();
});

// Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  console.log('fish card', fishCard);
  $('#snagged').append(fishCard);
};

$('button.add').click(moveToCart);
