wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1
        ]);
    Object.defineProperty(arr, '1', wrapTestObject({
        value: 1,
        configurable: false
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 1 }) }));
        return false;
    } catch (ex) {
        var desc = Object.getOwnPropertyDescriptor(arr, 'length');
        return ex instanceof TypeError && desc.value === 2 && desc.writable && !desc.enumerable && !desc.configurable;
    }
});
runTestCase(testcase);