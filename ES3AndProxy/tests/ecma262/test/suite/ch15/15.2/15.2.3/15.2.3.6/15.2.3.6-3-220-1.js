wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        String.prototype.get = wrapTestObject(function () {
            return 'stringGetProperty';
        });
        var strObj = wrapTestObject(new String());
        Object.defineProperty(obj, 'property', strObj);
        return obj.property === 'stringGetProperty';
    } finally {
        delete String.prototype.get;
    }
});
runTestCase(testcase);