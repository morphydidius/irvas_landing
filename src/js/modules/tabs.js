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

export {
	initGlazingTabContent,
	initDecorationTabContent,
};
