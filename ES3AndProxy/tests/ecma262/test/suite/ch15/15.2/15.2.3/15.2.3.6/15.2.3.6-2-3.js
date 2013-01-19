var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, false, wrapTestObject({}));
        return obj.hasOwnProperty('false');
    });
runTestCase(testcase);