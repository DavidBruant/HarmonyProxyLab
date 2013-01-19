var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({
                foo: wrapTestObject(function () {
                    return 42;
                }),
                foo: wrapTestObject(function (x) {
                    ;
                })
            });
        return o.hasOwnProperty('foo');
    });
runTestCase(testcase);