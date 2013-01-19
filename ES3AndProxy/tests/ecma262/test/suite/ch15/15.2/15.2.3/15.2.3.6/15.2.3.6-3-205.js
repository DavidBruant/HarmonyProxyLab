wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: wrapTestObject(function () {
            return 'present';
        })
    }));
    return obj.property === 'present';
});
runTestCase(testcase);