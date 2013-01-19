wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, wrapTestObject(new Boolean(false)), wrapTestObject({}));
    return obj.hasOwnProperty('false');
});
runTestCase(testcase);