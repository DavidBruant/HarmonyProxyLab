var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var errObj = wrapTestObject(new Error());
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: errObj }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop === errObj && desc.value === errObj;
    });
runTestCase(testcase);