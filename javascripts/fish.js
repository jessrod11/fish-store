const loadFish = (successFunction, errorFunction) => {
  $.get('../db/fish.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = loadFish;
