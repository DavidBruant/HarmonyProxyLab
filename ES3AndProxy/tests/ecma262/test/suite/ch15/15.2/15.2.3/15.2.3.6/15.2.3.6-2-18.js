var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 1e+21, wrapTestObject({}));
        return obj.hasOwnProperty('1e+21');
    });
runTestCase(testcase);