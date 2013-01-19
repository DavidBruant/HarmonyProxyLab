wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ value: 300 }) }));
    return obj.property === 300;
});
runTestCase(testcase);