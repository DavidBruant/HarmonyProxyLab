var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '123': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, wrapTestObject(new Number(123)));
        return desc.value === 1;
    });
runTestCase(testcase);