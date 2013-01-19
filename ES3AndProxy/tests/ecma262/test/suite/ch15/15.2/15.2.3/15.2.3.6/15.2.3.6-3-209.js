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
    child.get = wrapTestObject(function () {
        return 'ownDataProperty';
    });
    Object.defineProperty(obj, 'property', child);
    return obj.property === 'ownDataProperty';
});
runTestCase(testcase);