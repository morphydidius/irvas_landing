import { TabContent } from '@/js/models/TabContent';

const initGlazingTabContent = () => new TabContent(
	'.glazing_slider',
	'.glazing_block',
	'.glazing_content',
	'after-click',
);

const initDecorationTabContent = () => new TabContent(
	'.decoration_slider',
	'.decoration_item > div',
	'.decoration_content_item',
	'after_click',
);

const initPopupCalcTabContent = () => new TabContent(
	'.balcon_icons',
	'.balcon_icons_img',
	'.popup_calc .big_img img',
	'do_image_more',
	'inline-block',
);

const initTabContents = () => {
	initGlazingTabContent();
	initDecorationTabContent();
	initPopupCalcTabContent();
};

export {
	initTabContents,
};
