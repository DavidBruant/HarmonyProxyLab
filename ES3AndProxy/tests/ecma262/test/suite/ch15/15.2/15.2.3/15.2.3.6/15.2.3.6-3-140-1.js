wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Array.prototype.value = 'Array';
        var arrObj = wrapTestObject([
                1,
                2,
                3
            ]);
        Object.defineProperty(obj, 'property', arrObj);
        return obj.property === 'Array';
    } finally {
        delete Array.prototype.value;
    }
});
runTestCase(testcase);