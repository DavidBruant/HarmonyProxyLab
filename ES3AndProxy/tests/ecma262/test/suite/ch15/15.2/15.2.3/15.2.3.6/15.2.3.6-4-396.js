var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: NaN }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop !== obj.prop && desc.value !== desc.value;
    });
runTestCase(testcase);