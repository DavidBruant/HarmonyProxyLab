wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject(new Boolean(false));
    descObj.get = wrapTestObject(function () {
        return 'Boolean';
    });
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return obj.property === 'Boolean';
});
runTestCase(testcase);