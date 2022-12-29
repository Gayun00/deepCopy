const { copyObj } = require('.');

describe('test copy obj', () => {
	const obj = {
		a: 1,
	};

	test('copied obj has the same property key and value', () => {
		expect(copyObj(obj)).toEqual(obj);
	});

	test('copied obj has a different reference from obj', () => {
		expect(copyObj(obj)).not.toBe(obj);
	});

	test('it calls function recursively if the value is an object', () => {
		const obj = {
			b: {
				c: 2,
			},
		};

		expect(copyObj(obj)).toEqual(obj);
		expect(copyObj(obj)).not.toBe(obj);
	});
});
