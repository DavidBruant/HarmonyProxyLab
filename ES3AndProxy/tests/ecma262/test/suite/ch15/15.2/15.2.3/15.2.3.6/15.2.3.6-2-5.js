wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, NaN, wrapTestObject({}));
    return obj.hasOwnProperty('NaN');
});
runTestCase(testcase);