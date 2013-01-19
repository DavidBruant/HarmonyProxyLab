wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({ writable: false });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(child, 'writable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    Object.defineProperty(obj, 'property', child);
    var beforeWrite = obj.hasOwnProperty('property');
    obj.property = 'isWritable';
    var afterWrite = obj.property === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);