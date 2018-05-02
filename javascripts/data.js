const loadFish = require('./fish');
const writeFish = require('./fishDom');
const bindEvents = require('./events');
const applySale = require('./discount');

const whenFishLoad = (data) => {
  $('#available').append(writeFish(data.fish));
  bindEvents();
  applySale();
};

const ifFishDontLoad = (error) => {
  console.log('oh Noooooooo!', error);
};

const intializer = () => {
  loadFish(whenFishLoad, ifFishDontLoad);
};

module.exports = intializer;
