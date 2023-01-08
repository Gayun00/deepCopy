import * as func from './copyFunctions';
import { wrapKey, TYPE } from './constants';

export const copy = {
	[wrapKey(TYPE.MAP)](obj) {
		return func.copyMap(obj);
	},
	[wrapKey(TYPE.SET)](obj) {
		return func.copySet(obj);
	},
	[wrapKey(TYPE.OBJECT)](obj) {
		return func.copyObj(obj);
	},
	[wrapKey(TYPE.ARRAY)](arr) {
		return func.copyArray(arr);
	},
	[wrapKey(TYPE.SYMBOL)](val) {
		return func.copySymbol(val);
	},
	[wrapKey(TYPE.NULL)]() {
		return null;
	},
	[wrapKey(TYPE.UNDEFINED)]() {
		return undefined;
	},
	[TYPE.PRIMITIVE](obj) {
		return func.copyPrimitive(obj);
	},
};
