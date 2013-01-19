wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Error.prototype.configurable = true;
        var errObj = wrapTestObject(new Error());
        Object.defineProperty(obj, 'property', errObj);
        var beforeDeleted = obj.hasOwnProperty('property');
        delete obj.property;
        var afterDeleted = obj.hasOwnProperty('property');
        return beforeDeleted === true && afterDeleted === false;
    } finally {
        delete Error.prototype.configurable;
    }
});
runTestCase(testcase);