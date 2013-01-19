wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'writable', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(obj, 'property', child);
    var beforeWrite = obj.hasOwnProperty('property');
    obj.property = 'isWritable';
    var afterWrite = typeof obj.property === 'undefined';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);