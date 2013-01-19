var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var setter = wrapTestObject(function (x) {
            });
        var d1 = wrapTestObject({ set: setter });
        Object.defineProperty(o, 'foo', d1);
        var getter = undefined;
        var desc = wrapTestObject({ get: getter });
        Object.defineProperty(o, 'foo', desc);
        var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
        if (d2.get === getter && d2.set === setter && d2.configurable === false && d2.enumerable === false) {
            return true;
        }
    });
runTestCase(testcase);