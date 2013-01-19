var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '-20': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, -20);
        return desc.value === 1;
    });
runTestCase(testcase);