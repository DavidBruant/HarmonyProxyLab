wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo1', wrapTestObject({
        value: 10,
        writable: false,
        enumerable: true,
        configurable: false
    }));
    Object.defineProperty(obj, 'foo2', wrapTestObject({
        value: 20,
        writable: true,
        enumerable: false,
        configurable: false
    }));
    Object.freeze(obj);
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'foo1');
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'foo2');
    return dataPropertyAttributesAreCorrect(obj, 'foo1', 10, false, true, false) && dataPropertyAttributesAreCorrect(obj, 'foo2', 20, false, false, false) && desc1.configurable === false && desc1.writable === false && desc2.configurable === false && desc2.writable === false;
});
runTestCase(testcase);