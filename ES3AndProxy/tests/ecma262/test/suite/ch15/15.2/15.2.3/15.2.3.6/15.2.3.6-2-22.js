wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 1e-8, wrapTestObject({}));
    return obj.hasOwnProperty('1e-8');
});
runTestCase(testcase);