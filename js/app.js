'use strict';

var img = [];
var count = 0;
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img1Reference;
var img2Reference;
var img3Reference;
var main = document.getElementById('main');
var div = document.createElement('div');
var p = document.createElement('p');

var ProductCreation = function (name, src, alt) {
  this.product = name;
  this.src = src;
  this.alt = alt;
  this.viewed = 0;
  this.clicked = 0;
  img.push(this);
};

new ProductCreation('bag', './images/bag.jpg', 'Star-wars luggage');
new ProductCreation('banana', './images/banana.jpg', 'Banana slicer');
new ProductCreation('bathroom', './images/bathroom.jpg', 'Tablet/toilet-paper stand');
new ProductCreation('boots', './images/boots.jpg', 'Toeless rainboots');
new ProductCreation('breakfast', './images/breakfast.jpg', 'All-in-one breakfast machine');
new ProductCreation('bubblegum', './images/bubblegum.jpg', 'Novelty bubblegum');
new ProductCreation('chair', './images/chair.jpg', 'Round-top chair');
new ProductCreation('cthulhu', './images/cthulhu.jpg', 'Cthulhu figurine');
new ProductCreation('dogDuck', './images/dog-duck.jpg', 'Duck-lips for dogs');
new ProductCreation('dragon', './images/dragon.jpg', 'Dragon meat');
new ProductCreation('pen', './images/pen.jpg', 'Pen-cap utensils');
new ProductCreation('petSweep', './images/pet-sweep.jpg', 'Pet-paw broom booties');
new ProductCreation('scissors', './images/scissors.jpg', 'Pizza scissors');
new ProductCreation('shark', './images/shark.jpg', 'Shark sleeping bag');
new ProductCreation('sweep', './images/sweep.png', 'Baby onesie sweeper');
new ProductCreation('tauntaun', './images/tauntaun.jpg', 'Tauntaun sleeping bag');
new ProductCreation('unicorn', './images/unicorn.jpg', 'Unicorn meat');
new ProductCreation('usb', './images/usb.gif', 'Tentacle usb');
new ProductCreation('waterCan', './images/water-can.jpg', 'Watering can mug');
new ProductCreation('wineGlass', './images/wine-glass.jpg', 'No-spill wineglass');

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}


function renderImage() {
  img1Reference = img[randomNumber(img.length - 1)];
  img2Reference = img[randomNumber(img.length - 1)];
  img3Reference = img[randomNumber(img.length - 1)];

  if (img1Reference === img2Reference || img1Reference === img3Reference || img2Reference === img3Reference) {
    renderImage();
  } else {

    img1Reference.viewed++;
    img2Reference.viewed++;
    img3Reference.viewed++;

    img1.src = img1Reference.src;
    img2.src = img2Reference.src;
    img3.src = img3Reference.src;

    img1.alt = img1Reference.alt;
    img2.alt = img2Reference.alt;
    img3.alt = img3Reference.alt;

  }
}

function countRender() {
  if (count < 25) {
    count++;
    renderImage();
  } else {
    img1.removeEventListener('click', countClicks1);
    img2.removeEventListener('click', countClicks2);
    img3.removeEventListener('click', countClicks3);
    postResults();
  }
}

function postResults() {
  main.append(div);
  p.textContent = 'Results:';
  div.append(p);
  for (var i = 0; i < img.length; i++) {
    p = document.createElement('p');
    p.textContent = `${img[i].alt} was viewed ${img[i].viewed} times and chosen ${img[i].clicked} times.`;
    div.append(p);
  }
}

function countClicks1() {
  img1Reference.clicked++;
  countRender();
}

function countClicks2() {
  img2Reference.clicked++;
  countRender();
}

function countClicks3() {
  img3Reference.clicked++;
  countRender();
}

countRender();

// renderImage();

img1.addEventListener('click', countClicks1);
img2.addEventListener('click', countClicks2);
img3.addEventListener('click', countClicks3);
