export function Modal(triggerSelectors, modalSelector, closeSelector) {
	if (!triggerSelectors || !modalSelector) {
		return undefined;
	}

	this.triggers = document.querySelectorAll(triggerSelectors);
	this.modal = document.querySelector(modalSelector);
	this.closeSelector = document.querySelector(closeSelector);

	this.triggers.forEach(trigger => trigger
		.addEventListener('click', e => {
			e.preventDefault();
			this.modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}));

	this.closeSelector.addEventListener('click', e => {
		this.modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	});

	this.modal.addEventListener('click', (e) => {
		if (e.target === this.modal) {
			this.modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});
};
