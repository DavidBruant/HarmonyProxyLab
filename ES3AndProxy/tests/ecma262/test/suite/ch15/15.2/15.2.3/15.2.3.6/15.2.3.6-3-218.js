wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var funObj = wrapTestObject(function () {
        });
    funObj.get = wrapTestObject(function () {
        return 'functionGetProperty';
    });
    Object.defineProperty(obj, 'property', funObj);
    return obj.property === 'functionGetProperty';
});
runTestCase(testcase);