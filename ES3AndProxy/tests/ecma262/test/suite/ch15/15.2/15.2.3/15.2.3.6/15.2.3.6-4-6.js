wrapTestObject(function testcase() {
    wrapTestObject(function sameAccessorDescriptorValues(d1, d2) {
        return d1.get == d2.get && d1.enumerable == d2.enumerable && d1.configurable == d2.configurable;
    });
    var o = wrapTestObject({});
    var desc = wrapTestObject({
            get: wrapTestObject(function () {
            }),
            enumerable: true,
            configurable: true
        });
    Object.defineProperty(o, 'foo', desc);
    var d1 = Object.getOwnPropertyDescriptor(o, 'foo');
    Object.defineProperty(o, 'foo', desc);
    var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
    if (sameAccessorDescriptorValues(d1, d2) === true) {
        return true;
    }
});
runTestCase(testcase);