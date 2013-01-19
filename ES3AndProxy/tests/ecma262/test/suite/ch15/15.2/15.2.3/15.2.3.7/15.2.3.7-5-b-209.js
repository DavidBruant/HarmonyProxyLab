wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Math.get = wrapTestObject(function () {
            return 'Math';
        });
        Object.defineProperties(obj, wrapTestObject({ property: Math }));
        return obj.property === 'Math';
    } finally {
        delete Math.get;
    }
});
runTestCase(testcase);