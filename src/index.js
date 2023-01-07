import { key, TYPE } from './utils/constants';

export const deepCopy = (obj) => {
	let objType = '';
	if (typeof obj === 'object') {
		objType = Object.prototype.toString.call(obj);
	} else {
		objType = TYPE.PRIMITIVE;
	}
	return copy[objType](obj);
};

export const copy = {
	[key(TYPE.MAP)](obj) {
		return copyMap(obj);
	},
	[key(TYPE.SET)](obj) {
		return copySet(obj);
	},
	[key(TYPE.OBJECT)](obj) {
		return copyObj(obj);
	},
	[key(TYPE.ARRAY)](arr) {
		return copyArray(arr);
	},
	[key(TYPE.NULL)]() {
		return null;
	},
	[key(TYPE.UNDEFINED)]() {
		return undefined;
	},
	[TYPE.PRIMITIVE](obj) {
		return copyPrimitive(obj);
	},
};

export const copyPrimitive = (value) => {
	const res = value;
	return res;
};

export const copyArray = (array) => {
	const res = [];
	for (let key in array) {
		res[key] = deepCopy(array[key]);
	}
	return res;
};

export const copyObj = (origin) => {
	let res = {};
	for (let key in origin) {
		res[key] = deepCopy(origin[key]);
	}
	return res;
};

export const copyMap = (origin) => {
	const res = new Map();
	for (let [key, value] of origin) {
		res.set(key, deepCopy(value));
	}
	return res;
};

export const copySet = (origin) => {
	const res = new Set();
	for (let value of origin.values()) {
		res.add(deepCopy(value));
	}
	return res;
};
