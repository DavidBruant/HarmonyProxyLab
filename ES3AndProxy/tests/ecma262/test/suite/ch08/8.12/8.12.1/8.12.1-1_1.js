var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        return o.hasOwnProperty('foo') === false;
    });
runTestCase(testcase);