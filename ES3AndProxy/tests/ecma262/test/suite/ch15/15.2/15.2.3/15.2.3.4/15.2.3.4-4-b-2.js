var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'a': 'a' });
        Object.defineProperty(obj, 'b', wrapTestObject({
            get: wrapTestObject(function () {
                return 'b';
            }),
            enumerable: false,
            configurable: true
        }));
        Object.defineProperty(obj, 'c', wrapTestObject({
            get: wrapTestObject(function () {
                return 'c';
            }),
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(obj, 'd', wrapTestObject({
            value: 'd',
            enumerable: false,
            configurable: true
        }));
        var result = Object.getOwnPropertyNames(obj);
        var expResult = wrapTestObject([
                'a',
                'b',
                'c',
                'd'
            ]);
        return compareArray(expResult, result);
    });
runTestCase(testcase);