wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({ value: 1001 }) }));
    delete obj.prop;
    return obj.hasOwnProperty('prop') && obj.prop === 1001;
});
runTestCase(testcase);