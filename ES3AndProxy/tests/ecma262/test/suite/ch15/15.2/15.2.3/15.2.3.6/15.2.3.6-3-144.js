wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Math.value = 'Math';
        Object.defineProperty(obj, 'property', Math);
        return obj.property === 'Math';
    } finally {
        delete Math.value;
    }
});
runTestCase(testcase);