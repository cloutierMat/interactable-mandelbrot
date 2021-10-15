const registry = {};

function registerEvent (event, action) {
	if (!registry[event]) {
		registry[event] = [];
	}
	registry[event].push(action);
}

function addListener(event, action) {
	if(Array.isArray(event)) {
		event.forEach(e => registerEvent(e, action))
	} else {
		registerEvent(event, action)
	}
}

function executeEvent(event) {
	if(registry[event]){
		try {
			let args = [...arguments].slice(1);
			registry[event].forEach(action=> {
				action(...args)
			});
		} catch (error) {
			console.log(`Trouble running ${event} event!`);
			console.log(error);
		}
	}
}

export default {
	addListener,
	executeEvent
}