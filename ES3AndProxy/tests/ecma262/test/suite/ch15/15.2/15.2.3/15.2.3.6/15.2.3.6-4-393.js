var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var regObj = wrapTestObject(new RegExp());
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: regObj }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop === regObj && desc.value === regObj;
    });
runTestCase(testcase);