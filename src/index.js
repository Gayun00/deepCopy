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
	iterateObj2(array, (key, value) => (res[key] = value));
	return res;
};

export const copyObj = (origin) => {
	let res = {};
	iterateObj2(origin, (key, value) => (res[key] = value));
	return res;
};

export const copyMap = (origin) => {
	const res = new Map();
	iterateObj(origin, (key, value) => res.set(key, value));
	return res;
};

export const copySet = (origin) => {
	const res = new Set();
	iterateObj(origin.entries(), (value) => res.add(value));
	return res;
};

const iterateObj = (obj, setValueFunc) => {
	for (let [key, value] of obj) {
		setValueFunc(key, deepCopy(value));
	}
};

const iterateObj2 = (obj, setValueFunc) => {
	for (let key in obj) {
		setValueFunc(key, deepCopy(obj[key]));
	}
};
