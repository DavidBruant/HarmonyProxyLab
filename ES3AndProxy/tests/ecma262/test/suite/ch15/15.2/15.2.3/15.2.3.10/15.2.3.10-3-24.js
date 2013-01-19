var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        var preCheck = Object.isExtensible(proto);
        Object.preventExtensions(proto);
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        child.prop = 10;
        return preCheck && child.hasOwnProperty('prop');
    });
runTestCase(testcase);