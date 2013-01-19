wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Object.prototype.get = wrapTestObject(function () {
            return 'jsonGetProperty';
        });
        Object.defineProperty(obj, 'property', JSON);
        return obj.property === 'jsonGetProperty';
    } finally {
        delete Object.prototype.get;
    }
});
runTestCase(testcase);