wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject(new String());
    Object.defineProperty(props, 'prop', wrapTestObject({
        value: wrapTestObject({ value: 9 }),
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return obj.hasOwnProperty('prop') && obj.prop === 9;
});
runTestCase(testcase);