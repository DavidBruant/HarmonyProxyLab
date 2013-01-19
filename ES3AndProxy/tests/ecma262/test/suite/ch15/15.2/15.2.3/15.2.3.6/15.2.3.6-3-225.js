wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var regObj = wrapTestObject(new RegExp());
    regObj.get = wrapTestObject(function () {
        return 'regExpGetProperty';
    });
    Object.defineProperty(obj, 'property', regObj);
    return obj.property === 'regExpGetProperty';
});
runTestCase(testcase);