'use strict';

var img = [];
var count = 0;
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img1Reference;
var img2Reference;
var img3Reference;
var img1RefX;
var img2RefX;
var img3RefX;
var viewed = [];
var clicked = [];
var product = [];
var strImg;
var getStrImg = localStorage.getItem('strImg');

var ProductCreation = function (name, src, alt) {
  this.product = name;
  this.src = src;
  this.alt = alt;
  this.viewed = 0;
  this.clicked = 0;
  img.push(this);
};

if (getStrImg) {
  img = JSON.parse(getStrImg);
} else {
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
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}


function renderImage() {
  img1Reference = img[randomNumber(img.length)];
  img2Reference = img[randomNumber(img.length)];
  img3Reference = img[randomNumber(img.length)];

  if (img1Reference === img2Reference || img1Reference === img3Reference || img2Reference === img3Reference) {
    renderImage();
  } else if (img1Reference === img1RefX || img2Reference === img2RefX || img3Reference === img3RefX) {
    renderImage();
  } else {

    img1RefX = img1Reference;
    img2RefX = img2Reference;
    img3RefX = img3Reference;

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
    strImg = JSON.stringify(img);
    localStorage.setItem('strImg', strImg);
    img1.removeEventListener('click', countClicks1);
    img2.removeEventListener('click', countClicks2);
    img3.removeEventListener('click', countClicks3);
    postResults();
  }
}

function postResults() {

  for (var i = 0; i < img.length; i++) {
    viewed.push(img[i].viewed);
    clicked.push(img[i].clicked);
    product.push(img[i].product);
  }

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: product,
      datasets: [{
        label: '# of Votes',
        data: clicked,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(0, 81, 255, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(0, 81, 255, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(0, 81, 255, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(0, 81, 255, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(0, 81, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 81, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 81, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 81, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of views',
        data: viewed,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(0, 81, 255, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(0, 81, 255, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(0, 81, 255, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(0, 81, 255, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(0, 81, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 81, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 81, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 81, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

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
