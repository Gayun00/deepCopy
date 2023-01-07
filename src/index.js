import { key, TYPE, ITERATE_TYPE } from './utils/constants';

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
	iterate[ITERATE_TYPE.FOR_IN](array, (key, value) => (res[key] = value));
	return res;
};

export const copyObj = (origin) => {
	let res = {};
	iterate[ITERATE_TYPE.FOR_IN](origin, (key, value) => (res[key] = value));
	return res;
};

export const copyMap = (origin) => {
	const res = new Map();
	iterate[ITERATE_TYPE.FOR_OF](origin, (key, value) => res.set(key, value));
	return res;
};

export const copySet = (origin) => {
	const res = new Set();
	iterate[ITERATE_TYPE.FOR_OF](origin.entries(), (value) => res.add(value));
	return res;
};

const iterate = {
	[ITERATE_TYPE.FOR_IN](obj, setValueFunc) {
		for (let key in obj) {
			setValueFunc(key, deepCopy(obj[key]));
		}
	},
	[ITERATE_TYPE.FOR_OF](obj, setValueFunc) {
		for (let [key, value] of obj) {
			setValueFunc(key, deepCopy(value));
		}
	},
};
