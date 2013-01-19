wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Math, 'sqrt');
    if (desc.value === Math.sqrt && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);