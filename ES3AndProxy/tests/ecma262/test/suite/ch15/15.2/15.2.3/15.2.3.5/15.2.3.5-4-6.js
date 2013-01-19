wrapTestObject(function testcase() {
    var props = wrapTestObject([]);
    var result = false;
    Object.defineProperty(props, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            result = this instanceof Array;
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    Object.create(wrapTestObject({}), props);
    return result;
});
runTestCase(testcase);