export function Form(value) {
	this.form = typeof value === 'string' ? document.querySelector(value) : value;
	this.textInput = this.form.querySelector('input[type="text"]');
	this.phoneInput = this.form.querySelector('input[name="user_phone"]');

	this.inputState = {
		text: '',
		phone: '',
	};

	this.status = {
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

	const createStatusElem = () => {
		this.statusElem = document.createElement('div');
		this.statusElem.classList.add('status');
		this.form.appendChild(this.statusElem);
	};

	const addListeners = () => {
		this.textInput.addEventListener('input', () => {
			this.inputState.text = this.textInput.value;
		});

		this.phoneInput.addEventListener('input', () => {
			this.inputState.phone = this.phoneInput.value.replace(/\D/, '');
			this.textInput.value = this.inputState.text;
			this.phoneInput.value = this.inputState.phone;
		});

		this.form.addEventListener('submit', (e) => {
			e.preventDefault();

			if (isFormFilled()) {
				
				const data = new FormData(this.form);
				setFormStatus('sending');
				render();
				
				sendData(testUrl, data)
					.then(res => {
						setFormStatus('success');
						render();
						
						setTimeout(() => {
							setFormStatus('standBy');
							resetInputState();
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

	const isFormFilled = () => !Object.values(this.inputState)
		.some(value => !value.length);

	const resetFormStatus = () => {
		Object.keys(this.status).forEach(key => {
			this.status[key].status = false;
		});
	};

	const resetInputState = () => {
		this.inputState.text = '';
		this.inputState.phone = '';
	};

	const render = () => {
		const currentFormStatus = Object.keys(this.status)
			.find(elem => this.status[elem].status);
		this.statusElem.textContent = this.status[currentFormStatus].text || '';
		this.textInput.value = this.inputState.text;
		this.phoneInput.value = this.inputState.phone;
	};

	const sendData = async (url, data) => {
		const result = await fetch(url, {
			method: 'POST',
			body: data,
		});

		return await result.text();
	};

	const setFormStatus = (key) => {
		if (!Object.keys(this.status).includes(key)) return;

		resetFormStatus();
		this.status[key].status = true;
	};

	createStatusElem();
	addListeners();
};
