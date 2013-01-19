var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '30': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 30);
        return desc.value === 1;
    });
runTestCase(testcase);