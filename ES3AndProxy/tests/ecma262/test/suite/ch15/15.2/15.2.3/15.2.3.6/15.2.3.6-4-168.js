wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([
            0,
            1,
            2
        ]);
    try {
        Object.defineProperty(arrObj, '1', wrapTestObject({ configurable: false }));
        Object.defineProperty(arrObj, 'length', wrapTestObject({
            value: 0,
            writable: false
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && arrObj.length === 2;
    }
});
runTestCase(testcase);