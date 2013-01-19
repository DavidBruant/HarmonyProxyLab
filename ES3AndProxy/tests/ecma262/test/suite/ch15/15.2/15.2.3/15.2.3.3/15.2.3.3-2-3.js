var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'undefined': 1 });
        var desc1 = Object.getOwnPropertyDescriptor(obj, undefined);
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'undefined');
        return desc1.value === 1 && desc2.value === 1;
    });
runTestCase(testcase);