import '@/assets/css/bootstrap.css';
import '@/assets/css/animate.min.css';
import '@/assets/css/style.css';

import initSliders from '@/js/slider';

import {
	bindAndShowModals,
	initGlazingTabContent,
} from './js/main';

initSliders();

window.addEventListener('DOMContentLoaded', () => {
	bindAndShowModals();
	initGlazingTabContent();
});
