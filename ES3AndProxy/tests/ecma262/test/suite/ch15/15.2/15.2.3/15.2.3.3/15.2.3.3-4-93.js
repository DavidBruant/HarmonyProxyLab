wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Number.prototype, 'toPrecision');
    if (desc.value === Number.prototype.toPrecision && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);