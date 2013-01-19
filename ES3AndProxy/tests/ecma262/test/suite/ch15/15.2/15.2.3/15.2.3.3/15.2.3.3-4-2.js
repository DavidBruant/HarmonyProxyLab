var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var desc = Object.getOwnPropertyDescriptor(o, 'foo');
        if (desc === undefined) {
            return true;
        }
    });
runTestCase(testcase);