var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var toStringAccessed = false;
        var valueOfAccessed = false;
        var proto = wrapTestObject({
                valueOf: wrapTestObject(function () {
                    valueOfAccessed = true;
                    return 2;
                })
            });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        child.toString = wrapTestObject(function () {
            toStringAccessed = true;
            return 3;
        });
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: child }));
        return arrObj.length === 2 && !toStringAccessed && valueOfAccessed;
    });
runTestCase(testcase);