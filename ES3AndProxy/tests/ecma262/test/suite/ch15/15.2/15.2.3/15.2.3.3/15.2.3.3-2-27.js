var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '0.00001': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 0.00001);
        return desc.value === 1;
    });
runTestCase(testcase);