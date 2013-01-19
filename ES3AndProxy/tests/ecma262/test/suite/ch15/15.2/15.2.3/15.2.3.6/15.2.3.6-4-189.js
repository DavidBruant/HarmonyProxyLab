wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([
            1,
            2,
            3
        ]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ writable: false }));
    try {
        Object.defineProperty(arrObj, 4, wrapTestObject({ value: 'abc' }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);