wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Boolean.prototype, 'constructor');
    if (desc.value === Boolean.prototype.constructor && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);