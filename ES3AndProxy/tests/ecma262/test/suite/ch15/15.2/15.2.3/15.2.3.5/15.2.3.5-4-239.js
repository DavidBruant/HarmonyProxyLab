wrapTestObject(function testcase() {
    var proto = wrapTestObject({
            get: wrapTestObject(function () {
                return 'inheritedDataProperty';
            })
        });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var descObj = wrapTestObject(new ConstructFun());
    Object.defineProperty(descObj, 'get', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function () {
                return 'ownAccessorProperty';
            });
        })
    }));
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    return newObj.prop === 'ownAccessorProperty';
});
runTestCase(testcase);