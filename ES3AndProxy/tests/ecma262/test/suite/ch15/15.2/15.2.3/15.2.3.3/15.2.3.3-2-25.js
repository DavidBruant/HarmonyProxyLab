var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '1e-7': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 1e-7);
        return desc.value === 1;
    });
runTestCase(testcase);