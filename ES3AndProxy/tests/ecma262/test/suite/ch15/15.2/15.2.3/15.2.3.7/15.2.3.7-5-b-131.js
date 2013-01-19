wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject(new Date());
    descObj.value = 'Date';
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return obj.property === 'Date';
});
runTestCase(testcase);