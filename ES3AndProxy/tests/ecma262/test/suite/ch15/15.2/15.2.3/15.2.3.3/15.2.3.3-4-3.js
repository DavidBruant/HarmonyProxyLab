var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var getter = wrapTestObject(function () {
                return 1;
            });
        var d = wrapTestObject({ get: getter });
        Object.defineProperty(o, 'foo', d);
        var desc = Object.getOwnPropertyDescriptor(o, 'foo');
        if (desc.get === getter && desc.set === undefined && desc.enumerable === false && desc.configurable === false) {
            return true;
        }
    });
runTestCase(testcase);