var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({
                foo: wrapTestObject(function () {
                    return 42;
                })
            });
        return o.hasOwnProperty('foo');
    });
runTestCase(testcase);