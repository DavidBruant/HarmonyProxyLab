wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({ value: 'inheritedDataProperty' });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    child.value = 'ownDataProperty';
    Object.defineProperty(obj, 'property', child);
    return obj.property === 'ownDataProperty';
});
runTestCase(testcase);