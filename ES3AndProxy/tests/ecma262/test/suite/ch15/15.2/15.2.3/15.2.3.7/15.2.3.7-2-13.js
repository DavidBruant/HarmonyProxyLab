wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject(new RegExp());
    var result = false;
    Object.defineProperty(props, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            result = this instanceof RegExp;
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return result;
});
runTestCase(testcase);