import Picture from './peppa.jpeg';
import './picture-image.scss';

class PictureImage {
  render() {
    const img = document.createElement('img');
    img.src = Picture;
    img.alt = 'Picture';
    img.classList.add('picture-image');

    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default PictureImage;
