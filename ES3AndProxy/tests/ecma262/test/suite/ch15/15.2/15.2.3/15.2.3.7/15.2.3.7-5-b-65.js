wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'configurable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    var result1 = obj.hasOwnProperty('prop');
    delete obj.prop;
    var result2 = obj.hasOwnProperty('prop');
    return result1 === true && result2 === false;
});
runTestCase(testcase);