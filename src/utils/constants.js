export const TYPE = {
	MAP: 'Map',
	SET: 'Set',
	OBJECT: 'Object',
	ARRAY: 'Array',
	PRIMITIVE: 'Primitive',
	NULL: 'Null',
	UNDEFINED: 'Undefined',
};

export const ITERATE_TYPE = {
	FOR_IN: 'FOR_IN',
	FOR_OF: 'FOR_OF',
};

export const handleType = (obj) => {
	const objType = Object.prototype.toString.call(obj);
	return copy[objType](obj);
};

export const key = (type) => {
	return `[object ${type}]`;
};
