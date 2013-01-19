wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ writable: false }));
    try {
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 12 }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);