wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ configurable: 'false' }) }));
    var preCheck = obj.hasOwnProperty('property');
    delete obj.property;
    return preCheck && !obj.hasOwnProperty('property');
});
runTestCase(testcase);