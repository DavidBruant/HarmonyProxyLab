var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var result = Object.getOwnPropertyNames(obj);
        return result instanceof Array;
    });
runTestCase(testcase);