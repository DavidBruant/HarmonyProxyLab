var testcase = wrapTestObject(function testcase() {
        var str = wrapTestObject(new String('123'));
        var desc = Object.getOwnPropertyDescriptor(str, '2');
        return desc.value === '3';
    });
runTestCase(testcase);