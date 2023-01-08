import { recurse } from './recurse';
import { ITERATE_TYPE } from './constants';

export const copyPrimitive = (value) => {
	const res = value;
	return res;
};

export const copyArray = (array) => {
	const res = [];
	recurse[ITERATE_TYPE.FOR_IN](array, (key, value) => (res[key] = value));
	return res;
};

export const copyObj = (origin) => {
	let res = {};
	recurse[ITERATE_TYPE.FOR_IN](origin, (key, value) => (res[key] = value));
	return res;
};

export const copyMap = (origin) => {
	const res = new Map();
	recurse[ITERATE_TYPE.FOR_OF](origin, (key, value) => res.set(key, value));
	return res;
};

export const copySet = (origin) => {
	const res = new Set();
	recurse[ITERATE_TYPE.FOR_OF](origin.entries(), (value) => res.add(value));
	return res;
};

export const copySymbol = (origin) => {
	const res = new Symbol('res');
	const key = Symbol.keyFor(origin);
	res = Symbol.for(key);
	return res;
};
