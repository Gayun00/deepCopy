import { key, TYPE } from './utils/constants';

export const deepCopy = (obj) => {
	if (!(obj instanceof Object) || obj instanceof Array)
		throw new Error('unsupported type');

	const objType = Object.prototype.toString.call(obj);
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
