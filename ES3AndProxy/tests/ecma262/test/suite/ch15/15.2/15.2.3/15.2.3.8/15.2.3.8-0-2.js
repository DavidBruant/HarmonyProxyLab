wrapTestObject(function testcase() {
    if (Object.seal.length === 1) {
        return true;
    }
});
runTestCase(testcase);