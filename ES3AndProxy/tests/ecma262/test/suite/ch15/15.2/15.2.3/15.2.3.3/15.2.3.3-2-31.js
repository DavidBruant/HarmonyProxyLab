var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '123.1234567': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 123.1234567);
        return desc.value === 1;
    });
runTestCase(testcase);