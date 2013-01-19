wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Math.value = 'Math';
        Object.defineProperties(obj, wrapTestObject({ property: Math }));
        return obj.property === 'Math';
    } finally {
        delete Math.value;
    }
});
runTestCase(testcase);