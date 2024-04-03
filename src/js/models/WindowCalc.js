import { convertToNumbers } from '@/js/utils/utils';

export function WindowCalc() {
	this.state = {
		form: 0,
		width: '',
		height: '',
		type: 'tree',
		profile: null,
	};

	this.callBackOnSubmit = () => {
		resetState();
		render();
	};

	const windowForms = document.querySelectorAll('.balcon_icons_img');
	const windowFormPreviews = document.querySelectorAll('.popup_calc .big_img img');
	const windowWidth = document.querySelectorAll('#width');
	const windowHeight = document.querySelectorAll('#height');
	const windowViews = document.querySelectorAll('#view_type');
	const windowTypes = document.querySelectorAll('.checkbox');

	const resetState = () => {
		this.state.form = 0;
		this.state.width = null;
		this.state.height = null;
		this.state.type = 'tree';
		this.state.profile = null;
	};

	const render = () => {
		Array.from(windowForms).forEach((elem, index) => {
			elem.classList.remove('do_image_more');
			if (index === this.state.form) {
				elem.classList.add('do_image_more');
			}
		});

		Array.from(windowFormPreviews).forEach((elem, index) => {
			elem.classList.remove('do_image_more');
			elem.display = 'none';
			if (index === this.state.form) {
				elem.classList.add('do_image_more');
				elem.display = 'inline-block';
			}
		});

		Array.from(windowWidth).forEach((elem) => {
			elem.value = this.state.width;
		});

		Array.from(windowHeight).forEach((elem) => {
			elem.value = this.state.height;
		});

		Array.from(windowViews).forEach(elem => {
			elem.value = this.state.type;
		});

		Array.from(windowTypes).forEach(elem => {
			elem.checked = false;
		});
	};

	const setCheckboxActive = (elem) => {
		windowTypes.forEach(el => {
			el.checked = false;
		});
		elem.checked = true;
	};

	const bindActionsToElems = (action, elems, prop) => {
		Array.from(elems).forEach((elem, index) => {
			elem.addEventListener(action, () => {
				switch(elem.nodeName) {
					case 'SPAN':
						this.state[prop] = index;
						break;
					case 'INPUT':
						if (elem.type === 'checkbox') {
							this.state[prop] = index === 0 ? 'Холодное' : 'Теплое';
							setCheckboxActive(elem);
						} else {
							elem.value = this.state[prop] = convertToNumbers(elem.value);
						}
						break;
					case 'SELECT':
						this.state[prop] = elem.value;
						break;
				}
			});
		});
	};

	bindActionsToElems('click', windowForms, 'form');
	bindActionsToElems('input', windowWidth, 'width');
	bindActionsToElems('input', windowHeight, 'height');
	bindActionsToElems('change', windowViews, 'type');
	bindActionsToElems('change', windowTypes, 'profile');
};
