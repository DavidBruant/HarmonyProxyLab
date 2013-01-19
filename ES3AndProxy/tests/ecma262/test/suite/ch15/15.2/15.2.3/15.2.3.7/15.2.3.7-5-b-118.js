wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'value', wrapTestObject({
        get: wrapTestObject(function () {
            return 'ownAccessorProperty';
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return obj.property === 'ownAccessorProperty';
});
runTestCase(testcase);