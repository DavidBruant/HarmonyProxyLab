wrapTestObject(function testcase() {
    var base = wrapTestObject({});
    Object.defineProperty(base, 'foo', wrapTestObject({
        set: wrapTestObject(function () {
            ;
        }),
        enumerable: true
    }));
    var o = Object.create(base);
    return o.hasOwnProperty('foo') === false;
});
runTestCase(testcase);