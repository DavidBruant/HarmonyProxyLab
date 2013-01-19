var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, true, wrapTestObject({}));
        return obj.hasOwnProperty('true');
    });
runTestCase(testcase);