var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        var fun = wrapTestObject(function () {
                return 'inheritedAccessorProperty';
            });
        Object.defineProperty(proto, 'get', wrapTestObject({
            get: wrapTestObject(function () {
                return fun;
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'get', wrapTestObject({
            value: wrapTestObject(function () {
                return 'ownDataProperty';
            })
        }));
        Object.defineProperty(obj, 'property', child);
        return obj.property === 'ownDataProperty';
    });
runTestCase(testcase);