var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'get', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function () {
                    return 'inheritedAccessorProperty';
                });
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(obj, 'property', child);
        return obj.property === 'inheritedAccessorProperty';
    });
runTestCase(testcase);