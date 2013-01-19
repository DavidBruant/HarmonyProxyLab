wrapTestObject(function testcase() {
    var props = wrapTestObject({});
    Object.defineProperty(props, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject({});
        }),
        enumerable: false
    }));
    var newObj = Object.create(wrapTestObject({}), props);
    return !newObj.hasOwnProperty('prop');
});
runTestCase(testcase);