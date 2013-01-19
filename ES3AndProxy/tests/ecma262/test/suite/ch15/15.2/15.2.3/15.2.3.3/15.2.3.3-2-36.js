var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ '123\ufffd\ufffd\ufffd\xa6\ufffdcd': 1 });
        var desc = Object.getOwnPropertyDescriptor(obj, '123\ufffd\ufffd\ufffd\xa6\ufffdcd');
        return desc.value === 1;
    });
runTestCase(testcase);