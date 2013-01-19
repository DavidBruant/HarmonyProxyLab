wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(JSON, 'parse');
    if (desc.value === JSON.parse && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);