var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '0': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 0);
        return desc.value === 1;
    });
runTestCase(testcase);