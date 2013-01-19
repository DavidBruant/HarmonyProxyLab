wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Function.prototype.get = wrapTestObject(function () {
            return 'functionGetProperty';
        });
        var funObj = wrapTestObject(function () {
            });
        Object.defineProperty(obj, 'property', funObj);
        return obj.property === 'functionGetProperty';
    } finally {
        delete Function.prototype.get;
    }
});
runTestCase(testcase);