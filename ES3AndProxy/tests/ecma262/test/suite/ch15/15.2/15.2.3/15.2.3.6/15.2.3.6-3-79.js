wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var attr = wrapTestObject({});
    Object.defineProperty(attr, 'configurable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    Object.defineProperty(obj, 'property', attr);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);