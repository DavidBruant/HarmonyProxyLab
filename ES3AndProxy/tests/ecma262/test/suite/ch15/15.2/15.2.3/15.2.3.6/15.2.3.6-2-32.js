wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 123.1234567, wrapTestObject({}));
    return obj.hasOwnProperty('123.1234567');
});
runTestCase(testcase);