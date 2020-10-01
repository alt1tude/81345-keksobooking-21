'use strict';

//Найдем карту и покажем ее, сделав активной
// const map = document.querySelector('.map');
// map.classList.remove('map--faded');
const AUTHOR = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7', 'Name8'];
const AVATAR = ['img/avatars/user01.png','img/avatars/user02.png','img/avatars/user03.png','img/avatars/user04.png','img/avatars/user05.png','img/avatars/user06.png','img/avatars/user07.png','img/avatars/user08.png'];
const TITLE = ['Apart1', 'Apart2', 'Apart3', 'Apart4', 'Apart5', 'Apart6', 'Apart7'];
const ADDRESS = ['50, 130', '150, 200', '250, 300', '350, 400', '450, 500', '550, 600', '580, 630'];
const PRICE = [10, 20, 30, 40, 50, 60, 70];
const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const ROOM = [1, 2, 3, 4, 5];
const GUESTS = [1, 2, 3, 4, 5, 6, 7,];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['description1','description2','description3','description4','description5'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const LOCATION = {
  x: {min: 0, max: 1200},
  y: {min: 130, max: 630}  
};

//Функция получения случайного целого числа в заданном 
//интеревале включая mix и max значение
function randomInteger (from, to) {
  min = Math.ceil(from);
  max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Функция получения случайного э-та из массива
function randomItem (array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

//Объявляем генерацию случайных полей
function generateAuthor () {
  return randomItem(AUTHOR);
};

function generateAvatar () {
  return randomItem(AVATAR);
};

function generateTitle () {
  return randomItem(TITLE);
};

function generateAddress () {
  return randomItem(ADDRESS);
};

function generatePrice () {
  return randomItem(PRICE);
};

function generateType () {
  return randomItem(TYPE);
};

function generateRooms () {
  return randomItem(ROOM);
};

function generateGuests() {
  return randomItem(GUESTS);
};

function generateCheckin () {
  return randomItem(CHECKIN);
};

function generateCheckout () {
  return randomItem(CHECKOUT);
};

function generateFeatures () {
  return randomItem(FEATURES);
};

function generateDescription () {
  return randomItem(DESCRIPTION);
};

function generatePhotos () {
  return randomItem(PHOTOS);
};

function generateCoordX () {
  return randomInteger(LOCATION.x.min, LOCATION.x.max);
};

function generateCoordY () {
  return randomInteger(LOCATION.y.min, LOCATION.y.max);
};

function generateObj () {
  return {
    author: generateAuthor (),
    avatar: generateAvatar (),
    title: generateTitle (),
    address: generateAddress (),
    price: generatePrice (),
    type: generateType(),
    rooms: generateRooms(),
    guests: generateGuests(),
    checkin: generateCheckin(),
    checkout: generateCheckout(),
    features: generateFeatures(),
    description: generateDescription(),
    photos: generatePhotos(),
    x: generateCoordX(),
    y: generateCoordY()
  }
};

//Функция для создания массива
//из 8 сгенерированных JS объектов
const MOCS = 8;

function createObj () {
  const annon = [];
  for (let i=1; i<=MOCS; i++) {
    annon.push(generateObj());
  }
  return annon;
};

// Найдем шаблон
const pin = document.querySelector('#pin');
// Найдем эл-т в шаблоне который надо копировать
const pinTemplate = document.querySelector('.map__pin');
 

for (const i = 1; i <= 8; i++)  {
    
}
