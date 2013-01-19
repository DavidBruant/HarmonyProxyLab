var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: -Infinity }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop === -Infinity && desc.value === -Infinity;
    });
runTestCase(testcase);