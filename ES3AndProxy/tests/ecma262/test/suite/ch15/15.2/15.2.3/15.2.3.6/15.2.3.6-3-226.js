wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        JSON.get = wrapTestObject(function () {
            return 'jsonGetProperty';
        });
        Object.defineProperty(obj, 'property', JSON);
        return obj.property === 'jsonGetProperty';
    } finally {
        delete JSON.get;
    }
});
runTestCase(testcase);