var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '123.456': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 123.456);
        return desc.value === 1;
    });
runTestCase(testcase);