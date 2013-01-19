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
        Object.defineProperty(child, 'get', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function () {
                    return 'ownAccessorProperty';
                });
            })
        }));
        Object.defineProperty(obj, 'property', child);
        return obj.property === 'ownAccessorProperty';
    });
runTestCase(testcase);