wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject(new Date());
    var result = false;
    Object.defineProperty(props, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            result = this instanceof Date;
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return result;
});
runTestCase(testcase);