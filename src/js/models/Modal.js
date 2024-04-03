export function Modal(triggerSelectors, modalSelector, closeSelector) {
	if (!triggerSelectors || !modalSelector) {
		return undefined;
	}

	const triggers = document.querySelectorAll(triggerSelectors);
	const modal = document.querySelector(modalSelector);
	const close = document.querySelector(closeSelector);
	const modalWindows = document.querySelectorAll('[data-modal');

	const closeAllModals = () => {
		modalWindows.forEach(modal => {
			modal.style.display = 'none';
		});
		
		document.body.style.overflow = 'auto';
	};

	const openModal = () => {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	};

	triggers.forEach(trigger => trigger
		.addEventListener('click', e => {
			e.preventDefault();
			closeAllModals();
			openModal();
		}));

	close.addEventListener('click', e => {
		closeAllModals();
	});
};
