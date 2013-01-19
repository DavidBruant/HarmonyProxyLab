wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Math, 'caller');
    if (desc === undefined)
        return true;
    else
        return false;
});
runTestCase(testcase);