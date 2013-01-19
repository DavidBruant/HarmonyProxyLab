wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ writable: false }));
    try {
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 0 }));
        return true;
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);