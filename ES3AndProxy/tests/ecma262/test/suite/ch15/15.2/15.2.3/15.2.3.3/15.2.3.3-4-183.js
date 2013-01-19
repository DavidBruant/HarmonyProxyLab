var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Function, 'arguments_1');
        if (desc === undefined)
            return true;
        else
            return false;
    });
runTestCase(testcase);