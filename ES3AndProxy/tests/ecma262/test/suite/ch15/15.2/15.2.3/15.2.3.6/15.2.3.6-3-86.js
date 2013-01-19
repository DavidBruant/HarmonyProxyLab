wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var funObj = wrapTestObject(function (a, b) {
            return a + b;
        });
    funObj.configurable = true;
    Object.defineProperty(obj, 'property', funObj);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);