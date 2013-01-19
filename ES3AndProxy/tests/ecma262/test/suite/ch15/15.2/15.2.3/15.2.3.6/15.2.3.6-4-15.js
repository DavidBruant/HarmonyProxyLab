wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var getter = wrapTestObject(function () {
            return 1;
        });
    var d1 = wrapTestObject({
            get: getter,
            configurable: true
        });
    Object.defineProperty(o, 'foo', d1);
    var desc = wrapTestObject({ value: 101 });
    Object.defineProperty(o, 'foo', desc);
    var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
    if (d2.value === 101 && d2.writable === false && d2.enumerable === false && d2.configurable === true) {
        return true;
    }
});
runTestCase(testcase);