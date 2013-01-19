var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop1', wrapTestObject({
            value: 1001,
            enumerable: false,
            configurable: true
        }));
        Object.defineProperty(obj, 'prop2', wrapTestObject({
            get: wrapTestObject(function () {
                return 1002;
            }),
            enumerable: false,
            configurable: true
        }));
        var arr = Object.keys(obj);
        return arr.length === 0;
    });
runTestCase(testcase);