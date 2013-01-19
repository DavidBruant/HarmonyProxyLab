wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 10000000000000000000, wrapTestObject({}));
    return obj.hasOwnProperty('10000000000000000000');
});
runTestCase(testcase);