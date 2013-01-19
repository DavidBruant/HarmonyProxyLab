var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '1e-8': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 1e-8);
        return desc.value === 1;
    });
runTestCase(testcase);