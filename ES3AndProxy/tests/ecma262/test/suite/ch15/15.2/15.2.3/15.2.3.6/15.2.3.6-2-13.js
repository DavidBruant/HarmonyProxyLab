var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, -Infinity, wrapTestObject({}));
        return obj.hasOwnProperty('-Infinity');
    });
runTestCase(testcase);