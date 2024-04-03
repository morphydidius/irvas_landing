import { Form } from '@/js/models/Form';
import { WindowCalc } from '@/js/models/WindowCalc';

const initForms = () => {
	const simpleForms = Array.from(document.querySelectorAll('form:not([data-calc])'));
	const calcFormSelector = 'form[data-calc="end"]';

	simpleForms.forEach(form => new Form(form));

	const calc = new WindowCalc();

	const calcForm = new Form(calcFormSelector, calc.state, calc.callBackOnSubmit);
};

export {
	initForms,
};
