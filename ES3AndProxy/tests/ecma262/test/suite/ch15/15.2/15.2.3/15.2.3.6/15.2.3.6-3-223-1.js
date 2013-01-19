wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Object.prototype.get = wrapTestObject(function () {
            return 'mathGetProperty';
        });
        Object.defineProperty(obj, 'property', Math);
        return obj.property === 'mathGetProperty';
    } finally {
        delete Object.prototype.get;
    }
});
runTestCase(testcase);