import Heading from './components/heading/heading.js';
import PictureImage from './components/picture-image/picture-image.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('picture'));
const pictureImage = new PictureImage();
pictureImage.render();
