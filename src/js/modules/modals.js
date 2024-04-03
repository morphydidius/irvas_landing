import { Modal } from '@/js/models/Modal';
import { showModalByTime } from '@/js/utils/utils';

const bindPopupEngineer = () => new Modal(
	['.popup_engineer_btn'],
	'.popup_engineer',
	'.popup_engineer .popup_close',
);

const bindPopupSpec = () => new Modal(
	['.phone_link'],
	'.popup',
	'.popup .popup_close',
);

const bindPopupCalc = () => new Modal(
	['.popup_calc_btn'],
	'.popup_calc',
	'.popup_calc_close',
);

const bindPopupCalcProfile = () => new Modal(
	['.popup_calc_button'],
	'.popup_calc_profile',
	'.popup_calc_profile_close',
);

const bindPopupCalcEnd = () => new Modal(
	['.popup_calc_profile_button'],
	'.popup_calc_end',
	'.popup_calc_end_close',
);

const showPopupByMin = () => showModalByTime('.popup', 60000);

const bindModals = () => {
	bindPopupEngineer();
	bindPopupSpec();
	bindPopupCalc();
	bindPopupCalcProfile();
	bindPopupCalcEnd();
	showPopupByMin();
};

export { bindModals };
