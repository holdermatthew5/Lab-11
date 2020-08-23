'use strict';

var image = [];

var ProductCreation = function(name, src) {
  this.product = name;
  this.src = src;
  this.viewed = 0;
  this.chosen = 0;
  image.push(this);
};

new ProductCreation('bag', './images/bag.jpg');
new ProductCreation('banana','banana.jpg');
new ProductCreation('bathroom', 'bathroom.jpg');
new ProductCreation('boots', 'boots.jpg');
new ProductCreation('breakfast', 'breakfast.jpg');
new ProductCreation('bubblegum', 'bubblegum.jpg');
new ProductCreation('chair', 'chair.jpg');
new ProductCreation('cthulhu', 'cthulhu.jpg');
new ProductCreation('dogDuck', 'dog-duck.jpg');
new ProductCreation('dragon', 'dragon.jpg');
new ProductCreation('pen', 'pen.jpg');
new ProductCreation('petSweep', 'pet-sweep.jpg');
new ProductCreation('scissors', 'scissors.jpg');
new ProductCreation('shark', 'shark.jpg');
new ProductCreation('sweep', 'sweep.png');
new ProductCreation('tauntaun', 'tauntaun.jpg');
new ProductCreation('unicorn', 'unicorn.jpg');
new ProductCreation('usb', 'usb.gif');
new ProductCreation('waterCan', 'water-can.jpg');
new ProductCreation('wineGlass', 'wine-glass.jpg');

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function renderImage() {
  countClicks();
  document.getElementByID('img1').setAttribute('src', image[randomNumber(20)]);
  document.getElementByID('img2').setAttribute('src', image[randomNumber(20)]);
  document.getElementByID('img3').setAttribute('src', image[randomNumber(20)]);
}

// countClicks() {
//   if (img1 === clicked on) {
//     img1.chosen ++;
//   } else if(img2 === clicked on) {
//     img2.chosen ++;
//   } else {
//     img.chosen ++;
//   }
// }

var imageOneListener = document.getElementByID('img1');
imageOneListener.addEventListener('onclick', renderImage);
var imageTwoListener = document.getElementById('img2');
imageTwoListener.addEventListener('onclick', renderImage);
var imageThreeListener = document.getElementByID('img3');
imageThreeListener.addEventListener('onclick', renderImage);
