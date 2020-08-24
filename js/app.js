'use strict';

var img = [];
// var count = 0;
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img1Reference;
var img2Reference;
var img3Reference;


var ProductCreation = function(name, src, alt) {
  this.product = name;
  this.src = src;
  this.alt = alt;
  this.viewed = 0;
  this.clicked = 0;
  img.push(this);
};

new ProductCreation('bag', './images/bag.jpg', 'star-wars luggage');
new ProductCreation('banana','./images/banana.jpg', 'banana slicer');
new ProductCreation('bathroom', './images/bathroom.jpg', 'tablet/toilet-paper stand');
new ProductCreation('boots', './images/boots.jpg', 'toeless rainboots');
new ProductCreation('breakfast', './images/breakfast.jpg', 'all-in-one breakfast machine');
new ProductCreation('bubblegum', './images/bubblegum.jpg', 'novelty bubblegum');
new ProductCreation('chair', './images/chair.jpg', 'round-top chair');
new ProductCreation('cthulhu', './images/cthulhu.jpg', 'cthulhu figurine');
new ProductCreation('dogDuck', './images/dog-duck.jpg', 'duck-lips for dogs');
new ProductCreation('dragon', './images/dragon.jpg', 'dragon meat');
new ProductCreation('pen', './images/pen.jpg', 'pen-cap utensils');
new ProductCreation('petSweep', './images/pet-sweep.jpg', 'pet-paw broom booties');
new ProductCreation('scissors', './images/scissors.jpg', 'pizza scissors');
new ProductCreation('shark', './images/shark.jpg', 'shark sleeping bag');
new ProductCreation('sweep', './images/sweep.png', 'baby onesie sweeper');
new ProductCreation('tauntaun', './images/tauntaun.jpg', 'tauntaun sleeping bag');
new ProductCreation('unicorn', './images/unicorn.jpg', 'unicorn meat');
new ProductCreation('usb', './images/usb.gif', 'tentacle usb');
new ProductCreation('waterCan', './images/water-can.jpg', 'watering can mug');
new ProductCreation('wineGlass', './images/wine-glass.jpg', 'no-spill wineglass');

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}


function renderImage() {
  img1Reference = img[randomNumber(img.length - 1)];
  img2Reference = img[randomNumber(img.length - 1)];
  img3Reference = img[randomNumber(img.length - 1)];

  while (img1Reference === img2Reference || img1Reference === img3Reference || img2Reference === img3Reference) {
    console.log('here');
    renderImage();
  }

  img1Reference.viewed ++;
  img2Reference.viewed ++;
  img3Reference.viewed ++;

  img1.src = img1Reference.src;
  img2.src = img2Reference.src;
  img3.src = img3Reference.src;

  img1.alt = img1Reference.alt;
  img2.alt = img2Reference.alt;
  img3.alt = img3Reference.alt;

}

// if (count >= 25) {
//   break;
// }
// count++;

function countClicks1() {
  img1Reference.clicked ++;
  renderImage();
}

function countClicks2() {
  img2Reference.clicked ++;
  renderImage();
}

function countClicks3() {
  img3Reference.clicked ++;
  renderImage();
}

renderImage();


img1.addEventListener('click', countClicks1);
img2.addEventListener('click', countClicks2);
img3.addEventListener('click', countClicks3);
