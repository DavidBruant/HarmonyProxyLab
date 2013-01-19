wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject(new Number(-12));
    var result = false;
    Object.defineProperty(props, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            result = this instanceof Number;
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return result;
});
runTestCase(testcase);