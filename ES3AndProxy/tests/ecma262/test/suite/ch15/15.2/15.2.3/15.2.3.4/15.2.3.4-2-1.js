var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var result = Object.getOwnPropertyNames(obj);
        return Array.isArray(result);
    });
runTestCase(testcase);