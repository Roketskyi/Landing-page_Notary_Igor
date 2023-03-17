const circleButton = document.querySelector('.circle');
const whatsappButton = document.querySelector('.whatsapp');
const telegramButton = document.querySelector('.telegram');
const viberButton = document.querySelector('.viber');

let buttonsVisible = true;

circleButton.addEventListener('click', () => {
  if (buttonsVisible) {
    whatsappButton.style.display = 'none';
    telegramButton.style.display = 'none';
    viberButton.style.display = 'none';
    buttonsVisible = false;
  } else {
    whatsappButton.style.display = '';
    telegramButton.style.display = '';
    viberButton.style.display = '';
    buttonsVisible = true;
  }
});
