import { TabContent } from '@/js/models/TabContent';

const initGlazingTabContent = () => new TabContent(
	'.glazing_slider',
	'.glazing_block',
	'.glazing_content',
	'after-click',
).init();

export {
	initGlazingTabContent,
};
