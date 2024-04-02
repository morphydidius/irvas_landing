import { bindPopupEngineer, bindPopupSpec, showPopupByMin } from '@/js/modules/modals';
import { initGlazingTabContent, initDecorationTabContent } from '@/js/modules/tabs';

const bindAndShowModals = () => {
	bindPopupEngineer();
	bindPopupSpec();
	showPopupByMin();
};

export {
	bindAndShowModals,
	initGlazingTabContent,
	initDecorationTabContent,
};
