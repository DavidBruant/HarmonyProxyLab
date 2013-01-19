var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: null }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop === null && desc.value === null;
    });
runTestCase(testcase);