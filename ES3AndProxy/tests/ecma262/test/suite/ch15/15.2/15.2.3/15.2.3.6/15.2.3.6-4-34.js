wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'foo', wrapTestObject({
        value: 12,
        configurable: false
    }));
    try {
        Object.defineProperty(arrObj, 'foo', wrapTestObject({
            value: 11,
            configurable: true
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && arrObj.foo === 12;
    }
});
runTestCase(testcase);