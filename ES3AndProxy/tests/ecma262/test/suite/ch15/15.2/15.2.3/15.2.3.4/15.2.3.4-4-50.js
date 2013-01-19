var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'nonEnumerableProp', wrapTestObject({
            value: 10,
            enumerable: false,
            configurable: true
        }));
        var result = Object.getOwnPropertyNames(obj);
        return result[0] === 'nonEnumerableProp';
    });
runTestCase(testcase);