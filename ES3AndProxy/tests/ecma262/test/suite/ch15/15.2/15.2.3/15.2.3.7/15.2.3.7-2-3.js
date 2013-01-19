var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var obj1 = Object.defineProperties(obj, false);
        return obj === obj1;
    });
runTestCase(testcase);