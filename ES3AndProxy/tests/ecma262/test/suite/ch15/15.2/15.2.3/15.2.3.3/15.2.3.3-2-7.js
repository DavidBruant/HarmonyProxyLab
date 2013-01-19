var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'NaN': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, NaN);
        return desc.value === 1;
    });
runTestCase(testcase);