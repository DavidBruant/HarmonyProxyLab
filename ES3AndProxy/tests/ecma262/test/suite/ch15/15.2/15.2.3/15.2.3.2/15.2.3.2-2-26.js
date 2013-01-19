var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(new RegExp());
        return Object.getPrototypeOf(obj) === RegExp.prototype;
    });
runTestCase(testcase);