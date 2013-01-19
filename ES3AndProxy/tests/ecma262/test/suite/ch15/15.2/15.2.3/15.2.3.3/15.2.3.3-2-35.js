var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'null': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 'null');
        return desc.value === 1;
    });
runTestCase(testcase);