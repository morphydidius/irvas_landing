import '@/assets/css/bootstrap.css';
import '@/assets/css/animate.min.css';
import '@/assets/css/style.css';

import initSliders from '@/js/slider';

import { bindModals } from '@/js/modules/modals';
import { initTabContents } from '@/js/modules/tabs';
import { initForms } from '@/js/modules/forms';

window.addEventListener('DOMContentLoaded', () => {
	initSliders();
	bindModals();
	initTabContents();
	initForms();
});
