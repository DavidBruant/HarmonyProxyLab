wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject({});
    Object.defineProperty(props, 'prop', wrapTestObject({
        value: wrapTestObject({}),
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return obj.hasOwnProperty('prop');
});
runTestCase(testcase);