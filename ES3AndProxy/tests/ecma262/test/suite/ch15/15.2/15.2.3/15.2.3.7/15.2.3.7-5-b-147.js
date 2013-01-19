wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'writable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var descObj = wrapTestObject(new Con());
    Object.defineProperty(descObj, 'writable', wrapTestObject({
        get: wrapTestObject(function () {
            return false;
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    obj.property = 'isWritable';
    return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
});
runTestCase(testcase);