wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'value', wrapTestObject({
        get: wrapTestObject(function () {
            return 'inheritedAccessorProperty';
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var descObj = wrapTestObject(new ConstructFun());
    Object.defineProperty(descObj, 'value', wrapTestObject({
        get: wrapTestObject(function () {
            return 'ownDataProperty';
        })
    }));
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    return newObj.prop === 'ownDataProperty';
});
runTestCase(testcase);