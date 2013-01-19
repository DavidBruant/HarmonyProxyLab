wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    o['foo'] = 101;
    var getter = wrapTestObject(function () {
            return 1;
        });
    var d1 = wrapTestObject({ get: getter });
    Object.defineProperty(o, 'foo', d1);
    var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
    if (d2.get === getter && d2.enumerable === true && d2.configurable === true) {
        return true;
    }
});
runTestCase(testcase);