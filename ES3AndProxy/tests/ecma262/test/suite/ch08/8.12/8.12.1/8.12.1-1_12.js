var testcase = wrapTestObject(function testcase() {
        var base = wrapTestObject({});
        Object.defineProperty(base, 'foo', wrapTestObject({ value: 42 }));
        var o = Object.create(base);
        return o.hasOwnProperty('foo') === false;
    });
runTestCase(testcase);