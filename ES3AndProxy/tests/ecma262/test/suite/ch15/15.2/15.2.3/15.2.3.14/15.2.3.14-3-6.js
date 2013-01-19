var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var arr = Object.keys(obj);
        return arr instanceof Array;
    });
runTestCase(testcase);