wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var desc = Object.getOwnPropertyDescriptor(o, null);
    if (desc === undefined) {
        return true;
    }
});
runTestCase(testcase);