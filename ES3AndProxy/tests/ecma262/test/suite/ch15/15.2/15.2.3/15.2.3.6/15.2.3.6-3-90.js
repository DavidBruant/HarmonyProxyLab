wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var numObj = wrapTestObject(new Number(-2));
    numObj.configurable = true;
    Object.defineProperty(obj, 'property', numObj);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);