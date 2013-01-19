wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var getFunc = wrapTestObject(function () {
            return 1001;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: getFunc,
        set: undefined,
        enumerable: true,
        configurable: false
    }));
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    try {
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: 1001 }));
        return false;
    } catch (e) {
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return desc1.hasOwnProperty('get') && !desc2.hasOwnProperty('value') && e instanceof TypeError;
    }
});
runTestCase(testcase);