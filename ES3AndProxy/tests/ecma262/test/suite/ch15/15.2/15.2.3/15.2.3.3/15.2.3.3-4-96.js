wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Math, 'abs');
    if (desc.value === Math.abs && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);