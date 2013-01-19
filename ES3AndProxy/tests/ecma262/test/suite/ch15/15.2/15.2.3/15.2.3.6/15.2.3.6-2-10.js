var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, -20, wrapTestObject({}));
        return obj.hasOwnProperty('-20');
    });
runTestCase(testcase);