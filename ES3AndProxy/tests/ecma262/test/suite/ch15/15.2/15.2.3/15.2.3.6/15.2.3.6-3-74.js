wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({ value: 100 }));
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.property === 100;
    return beforeDeleted === true && afterDeleted === true;
});
runTestCase(testcase);