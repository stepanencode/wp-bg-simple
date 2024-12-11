import Peppa from './peppa.jpeg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'peppa';
  img.width = 500;
  img.src = Peppa;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
