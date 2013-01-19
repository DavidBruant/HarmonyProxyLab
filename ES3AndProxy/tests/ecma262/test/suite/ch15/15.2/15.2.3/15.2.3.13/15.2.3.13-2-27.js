wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.preventExtensions(proto);
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var obj = wrapTestObject(new ConstructFun());
    Object.preventExtensions(obj);
    return !Object.isExtensible(obj);
});
runTestCase(testcase);