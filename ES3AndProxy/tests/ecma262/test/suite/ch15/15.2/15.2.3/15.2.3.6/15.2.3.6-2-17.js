wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 100000000000000000000, wrapTestObject({}));
    return obj.hasOwnProperty('100000000000000000000');
});
runTestCase(testcase);