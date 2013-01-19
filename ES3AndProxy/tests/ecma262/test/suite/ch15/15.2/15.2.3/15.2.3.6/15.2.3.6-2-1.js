var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, undefined, wrapTestObject({}));
        return obj.hasOwnProperty('undefined');
    });
runTestCase(testcase);