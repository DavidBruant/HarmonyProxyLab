wrapTestObject(function testcase() {
    var obj = wrapTestObject({
            prop1: 1001,
            prop2: 1002
        });
    Object.defineProperty(obj, 'prop3', wrapTestObject({
        value: 1003,
        enumerable: true,
        configurable: true
    }));
    Object.defineProperty(obj, 'prop4', wrapTestObject({
        get: wrapTestObject(function () {
            return 1003;
        }),
        enumerable: true,
        configurable: true
    }));
    var arr = Object.keys(obj);
    return arr.hasOwnProperty(0) && arr[0] === 'prop1';
});
runTestCase(testcase);