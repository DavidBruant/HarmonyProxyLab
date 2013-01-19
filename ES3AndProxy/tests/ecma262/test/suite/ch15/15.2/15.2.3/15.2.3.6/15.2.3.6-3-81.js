wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({ configurable: false });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(child, 'configurable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    Object.defineProperty(obj, 'property', child);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);