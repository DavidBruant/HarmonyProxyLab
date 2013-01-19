wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
            return 10;
        }),
        configurable: true
    }));
    Object.freeze(obj);
    var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
    delete obj.foo;
    return obj.foo === 10 && desc.configurable === false;
});
runTestCase(testcase);