// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

export const loadState = () => {
	// console.log( "State Loaded");
	try {
		const serialisedState = localStorage.getItem('state');
		if (serialisedState === null) {
			return undefined;
		}
		return JSON.parse( serialisedState );
	} catch (err) {
		return undefined;
	}
};

export const saveState = state => {
	// console.log( "Saved state: ", state);
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem('state', serialisedState);
	} catch (err) {
		// Ignore write errors
		// Write to log?
	}
};