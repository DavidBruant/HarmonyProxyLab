wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, wrapTestObject(new Number(123)), wrapTestObject({}));
    return obj.hasOwnProperty('123');
});
runTestCase(testcase);