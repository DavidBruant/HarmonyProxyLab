var testcase = wrapTestObject(function testcase() {
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
        var descObj = wrapTestObject(new ConstructFun());
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        return newObj.prop === 'inheritedAccessorProperty';
    });
runTestCase(testcase);