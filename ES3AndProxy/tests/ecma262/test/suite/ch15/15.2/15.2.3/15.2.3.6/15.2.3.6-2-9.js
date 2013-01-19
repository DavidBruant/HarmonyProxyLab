var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 30, wrapTestObject({}));
        return obj.hasOwnProperty('30');
    });
runTestCase(testcase);