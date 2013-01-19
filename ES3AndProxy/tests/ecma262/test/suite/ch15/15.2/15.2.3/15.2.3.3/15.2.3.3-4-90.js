wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Number.prototype, 'toLocaleString');
    if (desc.value === Number.prototype.toLocaleString && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);