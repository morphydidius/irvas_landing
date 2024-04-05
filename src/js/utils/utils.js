const showModalByTime = (selector, time) => {
	setTimeout(() => {
		const modalWindow = document.querySelector(selector);

		if (modalWindow && time) {
			modalWindow.style.display = 'block';
		}
	}, time);
};

const convertToNumbers = (value) => value.replace(/\D/, '');

const calcScrollWidth = () => {
	const elem = document.createElement('div');
	elem.style.opacity = 0;
	elem.style.width = '50px';
	elem.style.height = '50px';
	elem.style.overflow = 'scroll';

	document.body.append(elem);

	const scrollWidth = elem.offsetWidth - elem.clientWidth;
	elem.remove();
	return scrollWidth || 0;
};

export {
	showModalByTime,
	convertToNumbers,
	calcScrollWidth,
};