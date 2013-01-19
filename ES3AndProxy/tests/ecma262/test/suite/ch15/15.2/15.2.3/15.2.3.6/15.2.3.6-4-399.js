var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: fnGlobalObject() }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop === fnGlobalObject() && desc.value === fnGlobalObject();
    });
runTestCase(testcase);