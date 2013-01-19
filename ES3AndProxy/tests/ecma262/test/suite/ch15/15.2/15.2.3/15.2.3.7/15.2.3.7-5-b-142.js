wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({ writable: true });
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var descObj = wrapTestObject(new Con());
    descObj.writable = false;
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    obj.property = 'isWritable';
    return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
});
runTestCase(testcase);