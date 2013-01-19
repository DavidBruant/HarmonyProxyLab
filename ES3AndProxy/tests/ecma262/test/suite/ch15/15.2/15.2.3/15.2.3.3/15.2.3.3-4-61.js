wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(String, 'fromCharCode');
    if (desc.value === String.fromCharCode && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);