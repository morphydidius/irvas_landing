import { calcScrollWidth } from '@/js/utils/utils';

const viewImages = () => {
	const popup = document.createElement('div');
	popup.classList.add('popup');
	popup.style.display = 'none';
	popup.style.justifyContent = 'center';
	popup.style.alignItems = 'center';

	const bigImage = document.createElement('img');
	bigImage.style.maxHeight = '90%';

	popup.append(bigImage);

	const imageSection = document.querySelector('.works');
	imageSection.append(popup);

	imageSection.addEventListener('click', e => {
		e.preventDefault();

		if (e.target) {
			if (e.target.classList.contains('preview')) {
				popup.style.display = 'flex';
				bigImage.setAttribute('src', e.target.parentNode.getAttribute('href'));
				document.body.overflow = 'hidden';
				popup.style.marginRight = `${calcScrollWidth()}px`;

			} else {
				popup.style.display = 'none';
				document.body.overflow = 'auto';
				popup.style.marginRight = 'auto';
			}
		}
	});


};

export { viewImages };