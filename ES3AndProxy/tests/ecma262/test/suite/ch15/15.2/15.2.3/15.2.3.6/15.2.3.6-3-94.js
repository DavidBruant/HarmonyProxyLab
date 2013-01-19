wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        JSON.configurable = true;
        Object.defineProperty(obj, 'property', JSON);
        var beforeDeleted = obj.hasOwnProperty('property');
        delete obj.property;
        var afterDeleted = obj.hasOwnProperty('property');
        return beforeDeleted === true && afterDeleted === false;
    } finally {
        delete JSON.configurable;
    }
});
runTestCase(testcase);