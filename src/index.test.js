const { copyObj, copyMap, copySet, deepCopy } = require('.');

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
