wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, '', wrapTestObject({}));
    return obj.hasOwnProperty('');
});
runTestCase(testcase);