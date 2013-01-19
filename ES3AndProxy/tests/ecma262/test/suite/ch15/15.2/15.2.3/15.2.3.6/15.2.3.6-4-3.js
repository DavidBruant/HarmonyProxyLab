wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var getter = wrapTestObject(function () {
            return 1;
        });
    var desc = wrapTestObject({ get: getter });
    Object.defineProperty(o, 'foo', desc);
    var propDesc = Object.getOwnPropertyDescriptor(o, 'foo');
    if (typeof propDesc.get === 'function' && propDesc.get === getter && propDesc.enumerable === false && propDesc.configurable === false) {
        return true;
    }
});
runTestCase(testcase);