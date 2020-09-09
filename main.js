'use strict'

let isContinue = true;

while (isContinue) {
   let expression = prompt("Напиши что нибудь...");   

   let fate = getRandomInt(20);

   switch (fate) {
      case 1:
         alert("Бесспорно");
         break;
      case 2:
         alert("Предрешено");
         break;
      case 3:
         alert("Накаких сомнений");
         break;
      case 4:
         alert("Определенно да");
         break;
      case 5:
         alert("Можешь быть уверен в этом");
         break;

      case 6:
         alert("Мне кажется - 'Да'");
         break;
      case 7:
         alert("Вероятнее всего");
         break;
      case 8:
         alert("Хорошие перспективы");
         break;
      case 9:
         alert("Знаки говорят - 'Да'");
         break;
      case 10:
         alert("Да");
         break;

      case 11:
         alert("Пока не ясно, попробуй снова");
         break;
      case 12:
         alert("Спроси позже");
         break;
      case 13:
         alert("Лучше не рассказывать");
         break;
      case 14:
         alert("Сейчас нельзя предсказать");
         break;
      case 15:
         alert("Сконцентрируйся и спроси опять");
         break;

      case 16:
         alert("Даже не думай");
         break;
      case 17:
         alert("Мой ответ — «нет»");
         break;
      case 18:
         alert("По моим данным — «нет»");
         break;
      case 19:
         alert("Перспективы не очень хорошие");
         break;
      case 20:
         alert("Весьма сомнительно");
         break;
      default:
         break;
   }

   isContinue = confirm("Еще?");
}

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }