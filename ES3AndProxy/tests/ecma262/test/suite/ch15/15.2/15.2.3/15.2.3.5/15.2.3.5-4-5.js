wrapTestObject(function testcase() {
    var props = wrapTestObject(function () {
        });
    var result = false;
    Object.defineProperty(props, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            result = this instanceof Function;
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    Object.create(wrapTestObject({}), props);
    return result;
});
runTestCase(testcase);