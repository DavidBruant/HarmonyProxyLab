wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var boolObj = wrapTestObject(new Boolean(true));
    boolObj.configurable = true;
    Object.defineProperty(obj, 'property', boolObj);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);