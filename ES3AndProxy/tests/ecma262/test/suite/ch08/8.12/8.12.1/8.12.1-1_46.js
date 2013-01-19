var testcase = wrapTestObject(function testcase() {
        var base = wrapTestObject({});
        Object.defineProperty(base, 'foo', wrapTestObject({
            get: wrapTestObject(function () {
                return 42;
            }),
            set: wrapTestObject(function () {
                ;
            })
        }));
        var o = Object.create(base);
        return o.hasOwnProperty('foo') === false;
    });
runTestCase(testcase);