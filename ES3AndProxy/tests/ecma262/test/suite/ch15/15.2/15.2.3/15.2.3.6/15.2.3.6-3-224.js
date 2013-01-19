wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var dateObj = wrapTestObject(new Date());
    dateObj.get = wrapTestObject(function () {
        return 'dateGetProperty';
    });
    Object.defineProperty(obj, 'property', dateObj);
    return obj.property === 'dateGetProperty';
});
runTestCase(testcase);