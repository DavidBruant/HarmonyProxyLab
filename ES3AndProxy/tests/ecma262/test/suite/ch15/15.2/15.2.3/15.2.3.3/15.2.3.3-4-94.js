wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Number.prototype, 'valueOf');
    if (desc.value === Number.prototype.valueOf && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);