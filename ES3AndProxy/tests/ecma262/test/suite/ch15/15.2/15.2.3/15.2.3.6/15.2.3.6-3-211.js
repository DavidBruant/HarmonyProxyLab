wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var attributes = wrapTestObject({});
    Object.defineProperty(attributes, 'get', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function () {
                return 'ownAccessorProperty';
            });
        })
    }));
    Object.defineProperty(obj, 'property', attributes);
    return obj.property === 'ownAccessorProperty';
});
runTestCase(testcase);