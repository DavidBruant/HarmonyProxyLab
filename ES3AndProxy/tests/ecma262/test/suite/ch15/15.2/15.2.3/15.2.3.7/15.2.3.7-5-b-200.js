wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'get', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function () {
                return 'inheritedAccessorProperty';
            });
        })
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var descObj = wrapTestObject(new Con());
    Object.defineProperty(descObj, 'get', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function () {
                return 'ownAccessorProperty';
            });
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return obj.property === 'ownAccessorProperty';
});
runTestCase(testcase);