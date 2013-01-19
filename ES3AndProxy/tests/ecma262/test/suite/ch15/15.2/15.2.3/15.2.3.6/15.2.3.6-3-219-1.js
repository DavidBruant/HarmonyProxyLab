wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Array.prototype.get = wrapTestObject(function () {
            return 'arrayGetProperty';
        });
        var arrObj = wrapTestObject([]);
        Object.defineProperty(obj, 'property', arrObj);
        return obj.property === 'arrayGetProperty';
    } finally {
        delete Array.prototype.get;
    }
});
runTestCase(testcase);