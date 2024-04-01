const showModalByTime = (selector, time) => {
	setTimeout(() => {
		const modalWindow = document.querySelector(selector);

		if (modalWindow && time) {
			modalWindow.style.display = 'block';
		}
	}, time);
};

export { showModalByTime };