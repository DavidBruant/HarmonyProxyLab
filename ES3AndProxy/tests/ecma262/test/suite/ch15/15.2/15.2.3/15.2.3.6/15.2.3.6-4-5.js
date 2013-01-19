wrapTestObject(function testcase() {
    wrapTestObject(function sameDataDescriptorValues(d1, d2) {
        return d1.value === d2.value && d1.enumerable === d2.enumerable && d1.writable === d2.writable && d1.configurable === d2.configurable;
    });
    var o = wrapTestObject({});
    o['foo'] = 101;
    var d1 = Object.getOwnPropertyDescriptor(o, 'foo');
    var desc = wrapTestObject({
            value: 101,
            enumerable: true,
            writable: true,
            configurable: true
        });
    Object.defineProperty(o, 'foo', desc);
    var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
    if (sameDataDescriptorValues(d1, d2) === true) {
        return true;
    }
});
runTestCase(testcase);