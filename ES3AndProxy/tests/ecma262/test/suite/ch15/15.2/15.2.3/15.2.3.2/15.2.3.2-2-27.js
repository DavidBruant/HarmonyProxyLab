var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(new Error());
        return Object.getPrototypeOf(obj) === Error.prototype;
    });
runTestCase(testcase);