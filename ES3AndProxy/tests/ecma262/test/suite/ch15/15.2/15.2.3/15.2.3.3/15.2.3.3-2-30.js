var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '100000000000000000000': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, 100000000000000000000);
        return typeof desc !== 'undefined' && desc.value === 1;
    });
runTestCase(testcase);