wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Math.get = wrapTestObject(function () {
            return 'mathGetProperty';
        });
        Object.defineProperty(obj, 'property', Math);
        return obj.property === 'mathGetProperty';
    } finally {
        delete Math.get;
    }
});
runTestCase(testcase);