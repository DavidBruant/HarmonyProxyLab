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
    Object.defineProperty(obj, 'prop', wrapTestObject({ configurable: false }));
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    delete obj.prop;
    return desc1.configurable === true && desc2.configurable === false && obj.hasOwnProperty('prop');
});
runTestCase(testcase);