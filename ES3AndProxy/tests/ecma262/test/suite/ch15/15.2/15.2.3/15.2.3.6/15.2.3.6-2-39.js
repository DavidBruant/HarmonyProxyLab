wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, wrapTestObject([
        1,
        2
    ]), wrapTestObject({}));
    return obj.hasOwnProperty('1,2');
});
runTestCase(testcase);