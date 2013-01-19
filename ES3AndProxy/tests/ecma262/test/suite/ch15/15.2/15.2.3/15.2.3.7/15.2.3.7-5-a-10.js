wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject(new Boolean(false));
    Object.defineProperty(props, 'prop', wrapTestObject({
        value: wrapTestObject({ value: 10 }),
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return obj.hasOwnProperty('prop') && obj.prop === 10;
});
runTestCase(testcase);