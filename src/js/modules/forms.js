import { Form } from '@/js/models/Form';

const initForms = () => {
	const forms = Array.from(document.querySelectorAll('form'));

	forms.forEach(form => new Form(form));
};

export {
	initForms,
};
