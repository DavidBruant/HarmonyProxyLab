wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([
            0,
            1,
            2
        ]);
    var arrProtoLen;
    try {
        arrProtoLen = Array.prototype.length;
        Array.prototype.length = 0;
        Object.defineProperty(arrObj, '2', wrapTestObject({ configurable: false }));
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 1 }));
        return false;
    } catch (e) {
        return e instanceof TypeError && arrObj.length === 3 && Array.prototype.length === 0;
    } finally {
        Array.prototype.length = arrProtoLen;
    }
});
runTestCase(testcase);