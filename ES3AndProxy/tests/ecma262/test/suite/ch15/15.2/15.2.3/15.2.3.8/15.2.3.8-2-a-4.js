wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
            return 10;
        }),
        configurable: true
    }));
    var preCheck = Object.isExtensible(obj);
    Object.seal(obj);
    delete obj.foo;
    return preCheck && obj.foo === 10;
});
runTestCase(testcase);