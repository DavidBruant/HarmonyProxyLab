var testcase = wrapTestObject(function testcase() {
        var base = wrapTestObject({
                foo: wrapTestObject(function () {
                    return 42;
                }),
                foo: wrapTestObject(function (x) {
                    ;
                })
            });
        var o = Object.create(base);
        return o.hasOwnProperty('foo') === false;
    });
runTestCase(testcase);