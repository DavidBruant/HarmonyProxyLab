wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'writable', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    obj.property = 'isWritable';
    return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
});
runTestCase(testcase);