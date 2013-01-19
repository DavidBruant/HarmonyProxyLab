wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var getter = wrapTestObject(function () {
            return 1;
        });
    var d1 = wrapTestObject({ get: getter });
    Object.defineProperty(o, 'foo', d1);
    var desc = wrapTestObject({ set: undefined });
    Object.defineProperty(o, 'foo', desc);
    var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
    if (d2.get === getter && d2.set === undefined && d2.configurable === false && d2.enumerable === false) {
        return true;
    }
});
runTestCase(testcase);