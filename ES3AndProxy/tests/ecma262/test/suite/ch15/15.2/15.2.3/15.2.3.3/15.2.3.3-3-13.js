wrapTestObject(function testcase() {
    var arg = wrapTestObject(function () {
            return arguments;
        })('ownProperty', true);
    var desc = Object.getOwnPropertyDescriptor(arg, '0');
    return desc.value === 'ownProperty' && desc.writable === true && desc.enumerable === true && desc.configurable === true;
});
runTestCase(testcase);