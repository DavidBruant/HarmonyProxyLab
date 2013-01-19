wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var dateObj = wrapTestObject(new Date());
    dateObj.value = 'Date';
    Object.defineProperty(obj, 'property', dateObj);
    return obj.property === 'Date';
});
runTestCase(testcase);