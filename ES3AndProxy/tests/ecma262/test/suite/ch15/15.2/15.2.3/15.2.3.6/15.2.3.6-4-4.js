wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var desc = wrapTestObject({});
    Object.defineProperty(o, 'foo', desc);
    var propDesc = Object.getOwnPropertyDescriptor(o, 'foo');
    if (propDesc.value === undefined && propDesc.writable === false && propDesc.enumerable === false && propDesc.configurable === false) {
        return true;
    }
});
runTestCase(testcase);