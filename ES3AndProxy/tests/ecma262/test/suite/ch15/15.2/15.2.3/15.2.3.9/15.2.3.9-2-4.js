wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        enumerable: false,
        configurable: true
    }));
    Object.freeze(obj);
    var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
    var beforeDeleted = obj.hasOwnProperty('foo');
    delete obj.foo;
    var afterDeleted = obj.hasOwnProperty('foo');
    return beforeDeleted && afterDeleted && desc.configurable === false && desc.writable === false;
});
runTestCase(testcase);