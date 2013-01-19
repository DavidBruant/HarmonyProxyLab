var testcase = wrapTestObject(function testcase() {
        var base = wrapTestObject({});
        Object.defineProperty(base, 'foo', wrapTestObject({
            set: wrapTestObject(function () {
                ;
            }),
            configurable: true
        }));
        var o = Object.create(base);
        return o.hasOwnProperty('foo') === false;
    });
runTestCase(testcase);