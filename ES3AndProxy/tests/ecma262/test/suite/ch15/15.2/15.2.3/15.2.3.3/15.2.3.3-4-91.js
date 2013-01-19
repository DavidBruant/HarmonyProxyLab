wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Number.prototype, 'toFixed');
    if (desc.value === Number.prototype.toFixed && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);