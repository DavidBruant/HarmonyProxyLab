wrapTestObject(function testcase() {
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'writable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
    newObj.prop = 'isWritable';
    var afterWrite = newObj.prop === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);