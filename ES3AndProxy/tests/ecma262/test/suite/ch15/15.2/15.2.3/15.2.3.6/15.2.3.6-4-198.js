wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.preventExtensions(arrObj);
    try {
        var desc = wrapTestObject({ value: 1 });
        Object.defineProperty(arrObj, '0', desc);
        return false;
    } catch (e) {
        return e instanceof TypeError && arrObj.hasOwnProperty('0') === false;
    }
});
runTestCase(testcase);