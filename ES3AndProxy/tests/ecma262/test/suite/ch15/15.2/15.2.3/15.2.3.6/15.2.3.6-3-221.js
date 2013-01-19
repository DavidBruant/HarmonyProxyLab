wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var boolObj = wrapTestObject(new Boolean(true));
    boolObj.get = wrapTestObject(function () {
        return 'booleanGetProperty';
    });
    Object.defineProperty(obj, 'property', boolObj);
    return obj.property === 'booleanGetProperty';
});
runTestCase(testcase);