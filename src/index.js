import { copy } from './utils/copyType';
import { TYPE } from './utils/constants';

export const deepCopy = (obj) => {
	let objType = '';
	if (typeof obj === 'object') {
		objType = Object.prototype.toString.call(obj);
	} else {
		objType = TYPE.PRIMITIVE;
	}
	return copy[objType](obj);
};
