wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        enumerable: false,
        configurable: true
    }));
    var preCheck = Object.isExtensible(obj);
    Object.seal(obj);
    var beforeDeleted = obj.hasOwnProperty('foo');
    delete obj.foo;
    var afterDeleted = obj.hasOwnProperty('foo');
    return preCheck && beforeDeleted && afterDeleted;
});
runTestCase(testcase);