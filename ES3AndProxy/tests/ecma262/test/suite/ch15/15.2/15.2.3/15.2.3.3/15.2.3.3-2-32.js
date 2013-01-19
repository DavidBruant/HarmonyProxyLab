var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, '');
        return desc.value === 1;
    });
runTestCase(testcase);