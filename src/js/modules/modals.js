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

const showPopupByMin = () => showModalByTime('.popup', 1000);

export { bindPopupEngineer, bindPopupSpec, showPopupByMin };
