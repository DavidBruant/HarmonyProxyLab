var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(new Number(-3));
        return Object.getPrototypeOf(obj) === Number.prototype;
    });
runTestCase(testcase);