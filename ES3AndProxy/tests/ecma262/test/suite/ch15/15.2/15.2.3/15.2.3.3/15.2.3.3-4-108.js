wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Math, 'pow');
    if (desc.value === Math.pow && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);