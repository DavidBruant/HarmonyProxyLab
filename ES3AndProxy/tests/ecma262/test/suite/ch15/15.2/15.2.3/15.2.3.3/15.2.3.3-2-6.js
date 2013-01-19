var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'true': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, true);
        return desc.value === 1;
    });
runTestCase(testcase);