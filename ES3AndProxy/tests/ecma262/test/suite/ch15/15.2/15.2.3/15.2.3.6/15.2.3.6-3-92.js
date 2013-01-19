wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var dateObj = wrapTestObject(new Date());
    dateObj.configurable = true;
    Object.defineProperty(obj, 'property', dateObj);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);