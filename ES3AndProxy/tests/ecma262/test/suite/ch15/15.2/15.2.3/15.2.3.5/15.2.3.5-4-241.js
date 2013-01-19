wrapTestObject(function testcase() {
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'get', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    return newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
});
runTestCase(testcase);