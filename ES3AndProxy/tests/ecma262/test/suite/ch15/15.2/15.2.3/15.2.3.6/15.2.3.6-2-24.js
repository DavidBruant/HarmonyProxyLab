var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 0.000001, wrapTestObject({}));
        return obj.hasOwnProperty('0.000001');
    });
runTestCase(testcase);