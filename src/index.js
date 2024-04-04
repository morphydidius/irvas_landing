import '@/assets/css/bootstrap.css';
import '@/assets/css/animate.min.css';
import '@/assets/css/style.css';

import initSliders from '@/js/slider';

import { bindModals } from '@/js/modules/modals';
import { initTabContents } from '@/js/modules/tabs';
import { initForms } from '@/js/modules/forms';
import { timer } from '@/js/modules/timer';

const endActionTime = '2024-06-05T20:49:00';

window.addEventListener('DOMContentLoaded', () => {
	initSliders();
	bindModals();
	initTabContents();
	initForms();
	timer(endActionTime);
});
