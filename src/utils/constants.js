export const TYPE = {
	MAP: 'Map',
	SET: 'Set',
	OBJECT: 'Object',
	ARRAY: 'Array',
	PRIMITIVE: 'Primitive',
	NULL: 'Null',
	UNDEFINED: 'Undefined',
};

export const handleType = (obj) => {
	const objType = Object.prototype.toString.call(obj);
	return copy[objType](obj);
};

export const key = (type) => {
	return `[object ${type}]`;
};
