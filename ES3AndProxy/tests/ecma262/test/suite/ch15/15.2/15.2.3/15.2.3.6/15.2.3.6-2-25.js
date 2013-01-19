var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 0.00001, wrapTestObject({}));
        return obj.hasOwnProperty('0.00001');
    });
runTestCase(testcase);