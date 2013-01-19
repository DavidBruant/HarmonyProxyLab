var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var dateObj = wrapTestObject(new Date());
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: dateObj }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.prop === dateObj && desc.value === dateObj;
    });
runTestCase(testcase);