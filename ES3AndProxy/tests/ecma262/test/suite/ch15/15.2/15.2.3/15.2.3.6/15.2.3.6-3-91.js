wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Math.configurable = true;
        Object.defineProperty(obj, 'property', Math);
        var beforeDeleted = obj.hasOwnProperty('property');
        delete obj.property;
        var afterDeleted = obj.hasOwnProperty('property');
        return beforeDeleted === true && afterDeleted === false;
    } finally {
        delete Math.configurable;
    }
});
runTestCase(testcase);