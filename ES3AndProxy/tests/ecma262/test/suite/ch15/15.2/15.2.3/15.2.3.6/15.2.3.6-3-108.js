wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({ configurable: -12345 }));
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);