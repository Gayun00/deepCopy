const { copyObj, copyMap } = require('.');

describe('test copy object', () => {
	const obj = {
		a: 1,
	};

	test('copied object has the same property key and value', () => {
		expect(copyObj(obj)).toEqual(obj);
	});

	test('copied object has a different reference from obj', () => {
		expect(copyObj(obj)).not.toBe(obj);
	});

	test('recursive calls if the value is an object', () => {
		const obj = {
			b: {
				c: 2,
			},
		};

		expect(copyObj(obj)).toEqual(obj);
		expect(copyObj(obj)).not.toBe(obj);
	});
});

describe('test copy map object', () => {
	const mapObj = new Map();
	mapObj.set('a', 1);

	test('copy primitive property in map object', () => {
		expect(copyMap(mapObj)).not.toBe(mapObj);
		expect(copyMap(mapObj)).toEqual(mapObj);
	});

	test('copy object in map object', () => {
		var mapObj = new Map([
			['A', { value: 'valueA' }],
			['B', { value: 'valueB' }],
			['C', { value: 'valueC' }],
		]);
		expect(copyMap(mapObj)).not.toBe(mapObj);
		expect(copyMap(mapObj)).toEqual(mapObj);
	});
});
