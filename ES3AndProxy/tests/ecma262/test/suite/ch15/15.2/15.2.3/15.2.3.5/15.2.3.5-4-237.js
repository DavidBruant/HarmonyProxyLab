wrapTestObject(function testcase() {
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'get', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function () {
                return 'ownAccessorProperty';
            });
        })
    }));
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    return newObj.prop === 'ownAccessorProperty';
});
runTestCase(testcase);