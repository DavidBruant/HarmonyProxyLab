var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 123, wrapTestObject({}));
        return obj.hasOwnProperty('123');
    });
runTestCase(testcase);