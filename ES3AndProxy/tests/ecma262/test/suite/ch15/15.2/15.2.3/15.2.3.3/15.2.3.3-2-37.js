var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '1': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 1);
        return desc.value === 1;
    });
runTestCase(testcase);