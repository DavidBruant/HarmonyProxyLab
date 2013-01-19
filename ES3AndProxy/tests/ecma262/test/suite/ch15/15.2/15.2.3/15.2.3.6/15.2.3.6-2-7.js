var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, +0, wrapTestObject({}));
        return obj.hasOwnProperty('0');
    });
runTestCase(testcase);