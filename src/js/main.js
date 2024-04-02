import {
	bindPopupEngineer,
	bindPopupSpec,
	showPopupByMin,
} from '@/js/modules/modals';
import {
	initGlazingTabContent,
	initDecorationTabContent,
} from '@/js/modules/tabs';
import { initForms } from '@/js/modules/forms'


const bindAndShowModals = () => {
	bindPopupEngineer();
	bindPopupSpec();
	showPopupByMin();
};

export {
	bindAndShowModals,
	initGlazingTabContent,
	initDecorationTabContent,
	initForms,
};
