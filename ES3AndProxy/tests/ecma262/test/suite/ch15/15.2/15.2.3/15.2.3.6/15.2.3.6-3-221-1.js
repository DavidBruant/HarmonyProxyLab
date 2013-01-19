wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Boolean.prototype.get = wrapTestObject(function () {
            return 'booleanGetProperty';
        });
        var boolObj = wrapTestObject(new Boolean(true));
        Object.defineProperty(obj, 'property', boolObj);
        return obj.property === 'booleanGetProperty';
    } finally {
        delete Boolean.prototype.get;
    }
});
runTestCase(testcase);