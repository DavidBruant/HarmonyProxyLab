wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var getFunc = wrapTestObject(function () {
            return 1001;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: getFunc,
        set: undefined,
        enumerable: false,
        configurable: true
    }));
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: 1001 }));
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    return desc1.hasOwnProperty('get') && desc2.hasOwnProperty('value');
});
runTestCase(testcase);