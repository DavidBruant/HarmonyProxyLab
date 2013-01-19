wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var toStringAccessed = false;
    var valueOfAccessed = false;
    var proto = wrapTestObject({
            toString: wrapTestObject(function () {
                toStringAccessed = true;
                return 'test';
            })
        });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    child.valueOf = wrapTestObject(function () {
        valueOfAccessed = true;
        return '10';
    });
    Object.defineProperty(obj, child, wrapTestObject({}));
    return obj.hasOwnProperty('test') && !valueOfAccessed && toStringAccessed;
});
runTestCase(testcase);