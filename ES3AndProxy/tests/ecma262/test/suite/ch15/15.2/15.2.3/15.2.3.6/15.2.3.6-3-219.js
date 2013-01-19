wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var arrObj = wrapTestObject([]);
    arrObj.get = wrapTestObject(function () {
        return 'arrayGetProperty';
    });
    Object.defineProperty(obj, 'property', arrObj);
    return obj.property === 'arrayGetProperty';
});
runTestCase(testcase);