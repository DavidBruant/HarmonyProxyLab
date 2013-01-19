wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    try {
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 123.5 }));
        return false;
    } catch (e) {
        return e instanceof RangeError;
    }
});
runTestCase(testcase);