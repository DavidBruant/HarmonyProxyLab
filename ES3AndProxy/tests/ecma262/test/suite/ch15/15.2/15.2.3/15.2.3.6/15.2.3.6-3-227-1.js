wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Error.prototype.get = wrapTestObject(function () {
            return 'errorGetProperty';
        });
        var errObj = wrapTestObject(new Error());
        Object.defineProperty(obj, 'property', errObj);
        return obj.property === 'errorGetProperty';
    } finally {
        delete Error.prototype.get;
    }
});
runTestCase(testcase);