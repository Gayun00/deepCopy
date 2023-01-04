const { copyObj, copyMap, copySet, deepCopy, copy } = require('.');
const { TYPE, key } = require('./utils/constants');

describe('test copying object', () => {
	test('copy primitive value in object', () => {
		const obj = {
			a: 1,
		};

		expect(copyObj(obj)).not.toBe(obj);
		expect(copyObj(obj)).toEqual(obj);
	});

	test('copy object value in object', () => {
		const obj = {
			b: {
				c: 2,
			},
		};

		expect(copyObj(obj)).toEqual(obj);
		expect(copyObj(obj)).not.toBe(obj);
	});
});

describe('test copying map object', () => {
	test('copy primitive value in map object', () => {
		const mapObj = new Map();
		mapObj.set('a', 1);

		expect(copyMap(mapObj)).not.toBe(mapObj);
		expect(copyMap(mapObj)).toEqual(mapObj);
	});

	test('copy object value in map object', () => {
		var mapObj = new Map([
			['A', { value: 'valueA' }],
			['B', { value: 'valueB' }],
			['C', { value: 'valueC' }],
		]);

		expect(copyMap(mapObj)).not.toBe(mapObj);
		expect(copyMap(mapObj)).toEqual(mapObj);
	});
});

describe('test copying set object', () => {
	const setObj = new Set();

	test('copy primitive value in set object', () => {
		setObj.add(1);
		setObj.add(5);
		expect(copySet(setObj)).not.toBe(setObj);
		expect(copySet(setObj)).toEqual(setObj);
	});

	test('copy object value in set object', () => {
		setObj.add({ a: 1, b: 2 });

		expect(copySet(setObj)).not.toBe(setObj);
		expect(copySet(setObj)).toEqual(setObj);
	});
});

describe('test deepCopy()', () => {
	test('make a deep copy of an object depends on type', () => {
		const obj = {
			a: 1,
			b: {
				c: 2,
			},
		};

		const setObj = new Set();
		setObj.add(1);
		setObj.add(5);
		setObj.add({ a: 1, b: 2 });

		const mapObj = new Map([
			['A', { value: 'valueA' }],
			['B', { value: 'valueB' }],
			['C', { value: 'valueC' }],
			['D', 'valueD'],
		]);

		expect(deepCopy(obj)).toEqual(obj);
		expect(deepCopy(setObj)).toEqual(setObj);
		expect(deepCopy(mapObj)).toEqual(mapObj);
	});

	test('throw an error if the parameter is primitive', () => {
		expect(() => deepCopy(4)).toThrow('unsupported type');
		expect(() => deepCopy('string')).toThrow('unsupported type');
	});

	test('throw an error if the parameter type is array', () => {
		expect(() => deepCopy([1, 2, 3])).toThrow('unsupported type');
	});
});

describe('test obj', () => {
	const obj = {
		A: 'valueA',
	};

	const mapObject = new Map([
		['A', { value: 'valueA' }],
		['B', { value: 'valueB' }],
		['C', { value: 'valueC' }],
		['D', 'valueD'],
	]);

	const setObj = new Set();
	setObj.add(1);
	setObj.add(5);
	setObj.add({ a: 1, b: 2 });

	test('get object property with Object.prototype', () => {
		const typeOfMap = Object.prototype.toString.call(mapObject);
		expect(typeOfMap).toBe(key(TYPE.MAP));
		expect(copy[typeOfMap](mapObject)).toEqual(mapObject);

		const typeOfObject = Object.prototype.toString.call(obj);
		expect(typeOfObject).toBe(key(TYPE.OBJECT));
		expect(copy[typeOfObject](obj)).toEqual(obj);

		// TODO: add test case of other type
	});
});
