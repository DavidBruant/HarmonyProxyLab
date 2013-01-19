wrapTestObject(function testcase() {
    var base = wrapTestObject({ foo: 42 });
    var o = Object.create(base);
    return o.hasOwnProperty('foo') === false;
});
runTestCase(testcase);