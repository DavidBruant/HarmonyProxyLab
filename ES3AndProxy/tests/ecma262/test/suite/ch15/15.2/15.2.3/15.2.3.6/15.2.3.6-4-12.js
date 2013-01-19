wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var d1 = wrapTestObject({
            value: 101,
            configurable: false
        });
    Object.defineProperty(o, 'foo', d1);
    var getter = wrapTestObject(function () {
            return 1;
        });
    var desc = wrapTestObject({ get: getter });
    try {
        Object.defineProperty(o, 'foo', desc);
    } catch (e) {
        if (e instanceof TypeError) {
            var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
            if (d2.value === 101 && d2.writable === false && d2.enumerable === false && d2.configurable === false) {
                return true;
            }
        }
    }
});
runTestCase(testcase);