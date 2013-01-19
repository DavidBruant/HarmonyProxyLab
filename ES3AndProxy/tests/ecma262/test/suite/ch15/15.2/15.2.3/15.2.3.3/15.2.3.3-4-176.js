wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(JSON, 'stringify');
    if (desc.value === JSON.stringify && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);