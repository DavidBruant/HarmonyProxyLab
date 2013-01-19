wrapTestObject(function testcase() {
    var obj = wrapTestObject([]);
    Object.defineProperty(obj, 'prop', wrapTestObject({
        value: 2010,
        writable: false,
        enumerable: true,
        configurable: true
    }));
    var verifyValue = obj.prop === 2010;
    obj.prop = 1001;
    return verifyValue && obj.prop === 2010;
});
runTestCase(testcase);