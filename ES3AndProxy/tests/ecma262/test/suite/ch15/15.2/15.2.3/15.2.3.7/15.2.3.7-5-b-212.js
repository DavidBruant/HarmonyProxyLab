wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        JSON.get = wrapTestObject(function () {
            return 'JSON';
        });
        Object.defineProperties(obj, wrapTestObject({ property: JSON }));
        return obj.property === 'JSON';
    } finally {
        delete JSON.get;
    }
});
runTestCase(testcase);