import slider from './slider';

import { bindPopupEngineer, bindPopupSpec, showPopupByMin } from '@/js/modules/modals';

function display() {
	console.log('MAIN PAGE');
};

const bindAndShowModals = () => {
	bindPopupEngineer();
	bindPopupSpec();
	showPopupByMin();
};

export {
	display,
	bindAndShowModals,
};
