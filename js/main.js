'use strict';

// Найдем карту и покажем ее, сделав активной
// const map = document.querySelector('.map');
// map.classList.remove('map--faded');
const MOCKS = 8;

const TITLES = [`Уютная квартира`, `Просторная квартира`, `Светлые апартаменты`, `Уютная гостинка`, `Шикарный лофт`];
const ADDRESSES = [`ул. Ленина`, `ул. Ломоносова`, `ул. Пушкина`, `ул. Лермонтова`, `ул. Мира`];
const TYPES = [`palace`, `flat`, `house`, `bungalow`];
const CHECKIN = [`12:00`, `13:00`, `14:00`];
const CHECKOUT = [`12:00`, `13:00`, `14:00`];
const FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const DESCRIPTIONS = [`description1`, `description2`, `description3`, `description4`, `description5`];
const PHOTOS = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
const LOCATION = {
  x: {min: 50, max: 1200 - 50},
  y: {min: 130, max: 630}
};

// Функция получения рандомного число от min до max

function getRandomInteger(from, to) {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция получения рандомного э-та из массива

function getRandomItem(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Объявляем генерацию случайных полей

function generateAuthor(index) {
  return `img/avatars/user0${index}.png`;
}

function generateTitles() {
  return getRandomItem(TITLES);
}

function generateAddresses() {
  return `${getRandomItem(ADDRESSES)} ${getRandomInteger(1, 50)}`;
}

function generatePrice() {
  return getRandomInteger(100, 3000);
}

function generateTypes() {
  return getRandomItem(TYPES);
}

function generateRoom() {
  return getRandomInteger(1, 5);
}

function generateGuest() {
  return getRandomInteger(1, 7);
}

function generateCheckin() {
  return getRandomItem(CHECKIN);
}

function generateCheckout() {
  return getRandomItem(CHECKOUT);
}

function generateFeatures() {
  return getRandomItem(FEATURES);
}

function generateDescriptions() {
  return getRandomItem(DESCRIPTIONS);
}

function generatePhotos() {
  return getRandomItem(PHOTOS);
}

function generateCoordX() {
  return getRandomInteger(LOCATION.x.min, LOCATION.x.max);
}

function generateCoordY() {
  return getRandomInteger(LOCATION.y.min, LOCATION.y.max);
}

function getPinData(i) {
  return {
    'author': {
      'avatar': generateAuthor(i)
    },
    'offer': {
      'title': generateTitles(),
      'address': generateAddresses(),
      'price': generatePrice(),
      'type': generateTypes(),
      'rooms': generateRoom(),
      'guests': generateGuest(),
      'checkin': generateCheckin(),
      'checkout': generateCheckout(),
      'features': generateFeatures(),
      'description': generateDescriptions(),
      'photos': generatePhotos()
    },
    'location': {
      'x': generateCoordX(),
      'y': generateCoordY()
    }
  };
}

// Функция для создания массива из 8 сгенерированных JS объектов

function createPinDatas() {
  const arrayFields = [];
  for (let i = 1; i <= MOCKS; i++) {
    arrayFields.push(getPinData(i));
  }
  return arrayFields;
}

// Блок map, удаляем временно класс для активации карты
const map = document.querySelector(`.map`);
map.classList.remove(`map--faded`);
// function showMap() {}

// Найдем блок(div) в которой будем копировать
const mapPins = document.querySelector(`.map__pins`);
// Найдем шаблон метки для копирования
const pinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);
// Найдем шаблон окна с информацией для копирования

// const templateCard = document.querySelector(`#card`).content.querySelector(`.map__card`);

// Функция заполнения блока(div) клонированными DOM-элементами
function addTemplatePins() {
  const pinDatas = createPinDatas();
  pinDatas.forEach(function (pinData) {
    const pinElement = pinTemplate.cloneNode(true);
    const avatarElement = pinElement.querySelector(`img`);
    avatarElement.src = pinData.author.avatar;
    avatarElement.alt = pinData.offer.title;
    mapPins.appendChild(pinElement);
    const width = parseInt(pinElement.offsetWidth, 10);
    const height = parseInt(pinElement.offsetHeight, 10);
    pinElement.style.left = `${pinData.location.x - width / 2}px`;
    pinElement.style.top = `${pinData.location.y - height}px`;
  });
}
addTemplatePins();
