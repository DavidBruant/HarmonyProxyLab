var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var strObj = wrapTestObject(new String());
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: strObj }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop === strObj && desc.value === strObj;
    });
runTestCase(testcase);