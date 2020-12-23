import './assets/styles/normalize.css';
import './assets/styles/style.scss';
import people from './assets/scripts/people';
import Portal from './assets/scripts/Portal';

const studentPortal = new Portal(people);
studentPortal.init();
