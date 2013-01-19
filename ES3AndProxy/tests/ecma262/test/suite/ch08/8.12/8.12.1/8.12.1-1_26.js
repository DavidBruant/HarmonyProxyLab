wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    Object.defineProperty(o, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
            return 42;
        })
    }));
    return o.hasOwnProperty('foo');
});
runTestCase(testcase);