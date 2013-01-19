wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var desc = Object.getOwnPropertyDescriptor(o, undefined);
    if (desc === undefined) {
        return true;
    }
});
runTestCase(testcase);