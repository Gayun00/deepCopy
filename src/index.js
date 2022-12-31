export const copyObj = (origin) => {
	let res = {};

	for (let key in origin) {
		if (typeof origin[key] === 'object') {
			res[key] = copyObj(origin[key]);
		} else {
			res[key] = origin[key];
		}
	}

	return res;
};

export const copyMap = (origin) => {
	if (origin instanceof Map) {
		const res = new Map();
		for (let [key, value] of origin) {
			if (typeof origin.get(key) === 'object') {
				const objValue = copyObj(value);
				res.set(key, objValue);
			} else {
				res.set(key, origin.get(key));
			}
		}
		return res;
	}
};

export const copySet = (origin) => {
	if (origin instanceof Set) {
		const res = new Set();
		for (let [key, value] of origin.entries()) {
			if (typeof value === 'object') {
				const objValue = copyObj(value);
				res.add(key, objValue);
			} else {
				res.add(key, value);
			}
		}
		return res;
	}
};
