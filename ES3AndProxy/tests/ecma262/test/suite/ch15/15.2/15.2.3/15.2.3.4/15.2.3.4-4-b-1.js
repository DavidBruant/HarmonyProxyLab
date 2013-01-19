wrapTestObject(function testcase() {
    var obj = wrapTestObject(new Object());
    obj.x = 1;
    obj.y = 2;
    var result = Object.getOwnPropertyNames(obj);
    var desc = Object.getOwnPropertyDescriptor(result, '0');
    if (desc.enumerable === true && desc.configurable === true && desc.writable === true) {
        return true;
    }
});
runTestCase(testcase);