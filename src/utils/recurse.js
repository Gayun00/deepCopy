import { deepCopy } from '..';
import { ITERATE_TYPE } from './constants';

export const recurse = {
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
