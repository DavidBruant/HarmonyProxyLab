wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject(new RegExp());
    Object.defineProperty(props, 'prop', wrapTestObject({
        value: wrapTestObject({ value: 14 }),
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return obj.hasOwnProperty('prop') && obj.prop === 14;
});
runTestCase(testcase);