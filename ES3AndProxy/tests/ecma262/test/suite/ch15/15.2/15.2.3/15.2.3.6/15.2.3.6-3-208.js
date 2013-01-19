wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({
            get: wrapTestObject(function () {
                return 'inheritedDataProperty';
            })
        });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(obj, 'property', child);
    return obj.property === 'inheritedDataProperty';
});
runTestCase(testcase);