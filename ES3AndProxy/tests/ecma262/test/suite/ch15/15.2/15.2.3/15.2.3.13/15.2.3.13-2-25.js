wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.preventExtensions(proto);
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var obj = wrapTestObject(new ConstructFun());
    return Object.isExtensible(obj);
});
runTestCase(testcase);