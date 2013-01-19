wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var attr = wrapTestObject({});
    Object.defineProperty(attr, 'configurable', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    Object.defineProperty(obj, 'property', attr);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    return beforeDeleted === true && afterDeleted === true;
});
runTestCase(testcase);