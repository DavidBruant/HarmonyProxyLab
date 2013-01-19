wrapTestObject(function testcase() {
    var props = wrapTestObject(new String());
    var result = false;
    Object.defineProperty(props, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            result = this instanceof String;
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    Object.create(wrapTestObject({}), props);
    return result;
});
runTestCase(testcase);