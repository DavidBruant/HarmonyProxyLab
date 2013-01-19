wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Date.prototype.value = 'Date';
        var dateObj = wrapTestObject(new Date());
        Object.defineProperty(obj, 'property', dateObj);
        return obj.property === 'Date';
    } finally {
        delete Date.prototype.value;
    }
});
runTestCase(testcase);