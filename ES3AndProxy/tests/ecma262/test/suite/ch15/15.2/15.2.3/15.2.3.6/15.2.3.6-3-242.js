var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        var data = 'data';
        Object.defineProperty(proto, 'set', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function (value) {
                    data = value;
                });
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(obj, 'property', child);
        obj.property = 'inheritedAccessorProperty';
        return obj.hasOwnProperty('property') && data === 'inheritedAccessorProperty';
    });
runTestCase(testcase);