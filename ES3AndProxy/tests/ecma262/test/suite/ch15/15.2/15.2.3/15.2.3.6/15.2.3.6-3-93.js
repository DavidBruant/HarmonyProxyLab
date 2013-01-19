wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var regObj = wrapTestObject(new RegExp());
    regObj.configurable = true;
    Object.defineProperty(obj, 'property', regObj);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);