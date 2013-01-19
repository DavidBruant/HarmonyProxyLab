wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject([]);
    var descObj = wrapTestObject({ value: 8 });
    Object.defineProperty(props, 'prop', wrapTestObject({
        value: descObj,
        enumerable: true
    }));
    Object.defineProperties(obj, props);
    return obj.hasOwnProperty('prop') && obj.prop === 8;
});
runTestCase(testcase);