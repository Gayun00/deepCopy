export const deepCopy = (obj) => {
	if (!(obj instanceof Object) || obj instanceof Array)
		throw new Error('unsupported type');

	if (obj instanceof Map) {
		return copyMap(obj);
	} else if (obj instanceof Set) {
		return copySet(obj);
	} else {
		return copyObj(obj);
	}
};

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
	const res = new Map();
	for (let [key, value] of origin) {
		if (typeof value === 'object') {
			const objValue = copyObj(value);
			res.set(key, objValue);
		} else {
			res.set(key, value);
		}
	}
	return res;
};

export const copySet = (origin) => {
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
};
