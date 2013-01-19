var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        return Object.getPrototypeOf(obj) === Object.prototype;
    });
runTestCase(testcase);