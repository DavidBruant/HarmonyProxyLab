var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 1003,
            enumerable: true,
            configurable: true
        }));
        var arr = Object.keys(obj);
        return arr.hasOwnProperty(0) && arr[0] === 'prop';
    });
runTestCase(testcase);