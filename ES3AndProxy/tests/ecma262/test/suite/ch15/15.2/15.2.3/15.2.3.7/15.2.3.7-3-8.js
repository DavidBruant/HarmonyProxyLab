wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject({});
    Object.defineProperty(props, 'prop1', wrapTestObject({
        value: wrapTestObject({}),
        enumerable: false
    }));
    Object.defineProperty(props, 'prop2', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return !obj.hasOwnProperty('prop1') && obj.hasOwnProperty('prop2');
});
runTestCase(testcase);