wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: wrapTestObject(function () {
            return 'getFunction';
        })
    }));
    return obj.hasOwnProperty('property') && obj.property === 'getFunction';
});
runTestCase(testcase);