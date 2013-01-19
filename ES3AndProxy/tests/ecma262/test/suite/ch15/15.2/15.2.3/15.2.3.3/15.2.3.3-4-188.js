var testcase = wrapTestObject(function testcase() {
        var f = Function('return 42;');
        var desc = Object.getOwnPropertyDescriptor(f, 'functionNameHopefullyDoesNotExist');
        return desc === undefined;
    });
runTestCase(testcase);