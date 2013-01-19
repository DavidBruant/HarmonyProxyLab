var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 1, wrapTestObject({}));
        return obj.hasOwnProperty('1');
    });
runTestCase(testcase);