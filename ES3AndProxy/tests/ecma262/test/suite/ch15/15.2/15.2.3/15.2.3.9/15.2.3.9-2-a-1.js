wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.foo = 10;
    Object.freeze(obj);
    var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
    delete obj.foo;
    return obj.foo === 10 && desc.configurable === false && desc.writable === false;
});
runTestCase(testcase);