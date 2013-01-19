var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '1e+22': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 1e+22);
        return desc.value === 1;
    });
runTestCase(testcase);