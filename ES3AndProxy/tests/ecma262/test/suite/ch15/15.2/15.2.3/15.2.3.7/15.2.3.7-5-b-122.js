wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'value', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
});
runTestCase(testcase);