wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        writable: true,
        enumerable: true,
        configurable: false
    }));
    Object.freeze(obj);
    var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
    return dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, true, false) && desc.writable === false && desc.configurable === false;
});
runTestCase(testcase);