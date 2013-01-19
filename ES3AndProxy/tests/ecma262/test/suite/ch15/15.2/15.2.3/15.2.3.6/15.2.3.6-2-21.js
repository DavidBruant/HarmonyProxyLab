wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 1e-7, wrapTestObject({}));
    return obj.hasOwnProperty('1e-7');
});
runTestCase(testcase);