wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Array.prototype, 'some');
    if (desc.value === Array.prototype.some && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);