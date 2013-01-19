wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 1e+22, wrapTestObject({}));
    return obj.hasOwnProperty('1e+22');
});
runTestCase(testcase);