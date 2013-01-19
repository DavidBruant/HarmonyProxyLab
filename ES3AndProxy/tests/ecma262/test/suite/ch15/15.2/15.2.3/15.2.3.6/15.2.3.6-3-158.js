wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var attr = wrapTestObject({});
    Object.defineProperty(attr, 'writable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    Object.defineProperty(obj, 'property', attr);
    var beforeWrite = obj.hasOwnProperty('property');
    obj.property = 'isWritable';
    var afterWrite = obj.property === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);