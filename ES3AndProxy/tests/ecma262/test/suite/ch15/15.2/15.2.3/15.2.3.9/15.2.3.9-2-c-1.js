var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 10,
            writable: false,
            enumerable: true,
            configurable: true
        }));
        Object.freeze(obj);
        var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
        return dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, true, false) && desc.configurable === false && desc.writable === false;
    });
runTestCase(testcase);