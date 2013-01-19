wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([
            0,
            1
        ]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ writable: false }));
    try {
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 0 }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);