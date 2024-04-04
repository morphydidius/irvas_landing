const timer = (deadLine) => {
	const daysElem = document.querySelector('#days');
	const hoursElem = document.querySelector('#hours');
	const minutesElem = document.querySelector('#minutes');
	const secondsElem = document.querySelector('#seconds');

	let timeLeftState = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	};

	const render = () => {
		const { days, hours, minutes, seconds } = timeLeftState;

		daysElem.textContent = addTo2Symbols(days);
		hoursElem.textContent = addTo2Symbols(hours);
		minutesElem.textContent = addTo2Symbols(minutes);
		secondsElem.textContent = addTo2Symbols(seconds);
	};

	render();

	const interval = setInterval(() => {
		timeLeftState = { ...timeLeftState, ...calcTimeLeft(deadLine) };
		render();

		if (!Object.keys(timeLeftState)
			.find(elem => Number(timeLeftState[elem]) > 0)) {
				clearInterval(interval);
			}
	}, 1000);
};

const addTo2Symbols = (value) => String(value).length === 1 ? `0${value}` : value;

const calcTimeLeft = (deadLine) => {
	const msecPerSec = 1000;
	const secPerMin = 60;
	const minPerHour = 60;
	const hoursPerDay = 24;

	const timeLeft = Date.parse(deadLine) - Date.parse(new Date());

	if (timeLeft < 0) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}
	}

	const seconds = Math.floor((timeLeft / msecPerSec) % secPerMin);
	const minutes = Math.floor((timeLeft / msecPerSec / secPerMin) % minPerHour);
	const hours = Math.floor((timeLeft / msecPerSec / secPerMin / minPerHour) % hoursPerDay);
	const days = Math.floor(timeLeft / msecPerSec / secPerMin / minPerHour / hoursPerDay);

	return { days, hours, minutes, seconds }
};



export { timer };