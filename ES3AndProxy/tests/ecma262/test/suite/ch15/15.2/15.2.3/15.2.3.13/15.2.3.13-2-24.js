var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var obj = wrapTestObject(new ConstructFun());
        return Object.isExtensible(obj);
    });
runTestCase(testcase);