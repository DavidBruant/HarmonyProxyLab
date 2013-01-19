var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({ foo: 42 });
        return o.hasOwnProperty('foo');
    });
runTestCase(testcase);