'use strict';

//Найдем карту и покажем ее, сделав активной
const map = document.querySelectorAll('.map');
map.classList.remove('map--faded');



const announcementObj = {
  name: '',
  avatar: 'img/avatars/user{{xx}}.png',
  title: generateTitle(),
  address: '600 350',
  price: generatePrice(),
  type: '',
  rooms: generateRooms(),
  guests: 3,
  checkin: '',
  checkout: '',
  features: [],
  description: '',
  photos: [],
  x: 300,
  y: 500
};

//Функция для создания массива
//из 8 сгенерированных JS объектов.(announcement)

const createAnnouncement = function (announcements) {
  for (var i = 1; i <= 8; i++)  {

  }
}
