var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 123.456, wrapTestObject({}));
        return obj.hasOwnProperty('123.456');
    });
runTestCase(testcase);