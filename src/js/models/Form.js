import { convertToNumbers } from '@/js/utils/utils';

export function Form(value, formData, callback = () => {}) {
	const form = typeof value === 'string' ? document.querySelector(value) : value;
	const textInput = form.querySelector('input[type="text"]');
	const phoneInput = form.querySelector('input[name="user_phone"]');
	let statusElem;

	const inputState = {
		name: '',
		phone: '',
	};

	const status = {
		standBy: {
			status: true,
			text: '',
		},
		sending: {
			status: false,
			text: 'Идет отправка',
		},
		success: {
			status: false,
			text: 'Спасибо! Скоро мы с Вами свяжемся',
		},
		failure: {
			status: false,
			text: 'Что-то пошло не так...',
		},
	};

	const testUrl = 'https://jsonplaceholder.typicode.com/todos';

	const bindStatusElem = () => {
		statusElem = document.createElement('div');
		statusElem.classList.add('status');
		form.appendChild(statusElem);
	};

	const addListeners = () => {
		textInput.addEventListener('input', () => {
			inputState.name = textInput.value;
		});

		phoneInput.addEventListener('input', () => {
			inputState.phone = convertToNumbers(phoneInput.value);
			textInput.value = inputState.name;
			phoneInput.value = inputState.phone;
		});

		form.addEventListener('submit', (e) => {
			e.preventDefault();

			if (isFormFilled()) {
				const data = new FormData(form);

				if (formData) {
					Object.keys(formData).forEach(key => {
						if (formData[key]) {
							data.append(key, formData[key]);
						}
					});
				}

				setFormStatus('sending');
				render();
				
				sendData(testUrl, data)
					.then(res => {
						setFormStatus('success');
						render();
						
						setTimeout(() => {
							setFormStatus('standBy');
							resetInputState();
							callback();
							render();
						}, 3000);
					})
					.catch(e => {
						setFormStatus('failure');
						render();

						setTimeout(() => {
							setFormStatus('standBy');
							render();
						}, 3000);
					});
			}
		});
	};

	const isFormFilled = () => !Object.values(inputState)
		.some(value => !value.length);

	const resetFormStatus = () => {
		Object.keys(status).forEach(key => {
			status[key].status = false;
		});
	};

	const resetInputState = () => {
		inputState.name = '';
		inputState.phone = '';
	};

	const render = () => {
		const currentFormStatus = Object.keys(status)
			.find(elem => status[elem].status);
		statusElem.textContent = status[currentFormStatus].text || '';
		textInput.value = inputState.name;
		phoneInput.value = inputState.phone;
	};

	const sendData = async (url, data) => {
		const result = await fetch(url, {
			method: 'POST',
			body: data,
		});

		return await result.text();
	};

	const setFormStatus = (key) => {
		if (!Object.keys(status).includes(key)) return;

		resetFormStatus();
		status[key].status = true;
	};

	bindStatusElem();
	addListeners();
};
