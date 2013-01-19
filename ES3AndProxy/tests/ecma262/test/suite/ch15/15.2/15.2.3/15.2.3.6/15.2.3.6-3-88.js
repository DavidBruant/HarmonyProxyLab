wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var strObj = wrapTestObject(new String('abc'));
    strObj.configurable = true;
    Object.defineProperty(obj, 'property', strObj);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);