export function TabContent(
	headerSelector,
	tabsSelector,
	contentsSelector,
	classActive = 'active',
	display = 'block',
) {
	const header = document.querySelector(headerSelector);
	const tabs = Array.from(document.querySelectorAll(tabsSelector));
	const contents = Array.from(document.querySelectorAll(contentsSelector));
	const activeClass = classActive;

	const isContentFull = tabs?.length === contents?.length;

	const state = tabs.reduce((accum, tab, index) => {
		tab.classList.add(`tab-${index}`);

		const stateElem = {
			tab: tab,
			content: contents[index],
			active: false,
		};

		accum.push(stateElem);

		return accum;

	}, []);

	if (!header
		|| !tabs
		|| !contents
		|| !isContentFull)
	{
		return undefined;
	}

	header.addEventListener('click', (e) => {
		e.preventDefault();

		const chosenTab = e.target.closest(tabsSelector);
		const chosenStateElem = state
			.find((elem, index) => chosenTab?.classList
				? Array.from(chosenTab.classList).includes(`tab-${index}`)
				: false
			);

		if (chosenStateElem) {
			resetState();
			setActiveTabState(chosenStateElem);
			render();
		}
	});

	const resetState = () => {
		state.forEach(elem => {
			elem.active = false;
		})
	};

	const setActiveTabState = (stateElem) => {
		if (stateElem) {
			stateElem.active = true;
		}
	};

	const reset = () => {
		tabs.forEach(tab => {
			tab.classList.remove(activeClass);
		});
		contents.forEach(content => {
			content.classList.remove(activeClass);
			content.style.display = 'none';
		});
	};

	const showTabContent = (stateElem) => {
		stateElem.tab.classList.add(activeClass);
		stateElem.content.classList.add(activeClass);
		stateElem.content.style.display = display;
	};

	const render = () => {
		reset();
		showTabContent(state.find(({ active }) => active));
	};

	setActiveTabState(state[0]);
	render();
};
