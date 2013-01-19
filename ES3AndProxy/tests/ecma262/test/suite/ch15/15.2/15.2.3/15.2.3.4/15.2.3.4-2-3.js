wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var result = Object.getOwnPropertyNames(obj);
    return result.length === 0;
});
runTestCase(testcase);