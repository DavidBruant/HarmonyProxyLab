wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'value', wrapTestObject({
        get: wrapTestObject(function () {
            return 'inheritedAccessorProperty';
        })
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var descObj = wrapTestObject(new Con());
    Object.defineProperty(descObj, 'value', wrapTestObject({
        get: wrapTestObject(function () {
            return 'ownAccessorProperty';
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return obj.property === 'ownAccessorProperty';
});
runTestCase(testcase);