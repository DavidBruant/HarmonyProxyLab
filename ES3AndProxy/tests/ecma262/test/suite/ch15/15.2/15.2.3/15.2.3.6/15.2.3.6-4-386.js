var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var arrObj = wrapTestObject([]);
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: arrObj }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop === arrObj && desc.value === arrObj;
    });
runTestCase(testcase);