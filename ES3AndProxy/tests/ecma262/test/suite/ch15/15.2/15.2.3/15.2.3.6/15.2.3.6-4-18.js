wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var getter = wrapTestObject(function () {
            return 1;
        });
    var d1 = wrapTestObject({ get: getter });
    Object.defineProperty(o, 'foo', d1);
    var setter = wrapTestObject(function (x) {
        });
    var desc = wrapTestObject({ set: setter });
    try {
        Object.defineProperty(o, 'foo', desc);
    } catch (e) {
        if (e instanceof TypeError) {
            var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
            if (d2.get === getter && d2.configurable === false && d2.enumerable === false) {
                return true;
            }
        }
    }
});
runTestCase(testcase);