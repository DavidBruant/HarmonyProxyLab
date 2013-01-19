wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject(new Number(-9));
    descObj.value = 'Number';
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return obj.property === 'Number';
});
runTestCase(testcase);