export function TabContent(
	headerSelector,
	tabsSelector,
	contentsSelector,
	activeClass = 'active'
) {
	this.header = document.querySelector(headerSelector);
	this.tabs = Array.from(document.querySelectorAll(tabsSelector));
	this.contents = Array.from(document.querySelectorAll(contentsSelector));
	this.activeClass = activeClass;

	this.isContentFull = this.tabs?.length === this.contents?.length;

	this.state = this.tabs.reduce((accum, tab, index) => {
		tab.classList.add(`tab-${index}`);

		const stateElem = {
			tab: tab,
			content: this.contents[index],
			active: false,
		};

		accum.push(stateElem);

		return accum;

	}, []);

	if (!this.header
		|| !this.tabs
		|| !this.contents
		|| !this.isContentFull)
	{
		return undefined;
	}

	this.header.addEventListener('click', (e) => {
		e.preventDefault();

		const chosenTab = e.target.closest(tabsSelector);
		const chosenStateElem = this.state
			.find((elem, index) => chosenTab?.classList
				? Array.from(chosenTab.classList).includes(`tab-${index}`)
				: false
			);

		if (chosenStateElem) {
			this.resetState();
			this.setActiveTabState(chosenStateElem);
			this.render();
		}
	});

	this.resetState = () => {
		this.state.forEach(elem => {
			elem.active = false;
		})
	};

	this.setActiveTabState = (stateElem) => {
		if (stateElem) {
			stateElem.active = true;
		}
	};

	this.reset = () => {
		this.tabs.forEach(tab => {
			tab.classList.remove(activeClass);
		});
		this.contents.forEach(content => {
			content.classList.remove(activeClass);
			content.style.display = 'none';
		});
	};

	this.showTabContent = (stateElem) => {
		stateElem.tab.classList.add(activeClass);
		stateElem.content.classList.add(activeClass);
		stateElem.content.style.display = 'block';
	};

	this.render = () => {
		this.reset();
		this.showTabContent(this.state.find(({ active }) => active));
	};
};
