wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject(new Error());
    descObj.get = wrapTestObject(function () {
        return 'Error';
    });
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return obj.property === 'Error';
});
runTestCase(testcase);