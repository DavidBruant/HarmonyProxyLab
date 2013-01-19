var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'Hello': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, wrapTestObject(new String('Hello')));
        return desc.value === 1;
    });
runTestCase(testcase);