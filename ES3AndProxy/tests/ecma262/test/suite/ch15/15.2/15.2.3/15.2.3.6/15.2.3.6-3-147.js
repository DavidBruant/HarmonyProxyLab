wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        JSON.value = 'JSON';
        Object.defineProperty(obj, 'property', JSON);
        return obj.property === 'JSON';
    } finally {
        delete JSON.value;
    }
});
runTestCase(testcase);