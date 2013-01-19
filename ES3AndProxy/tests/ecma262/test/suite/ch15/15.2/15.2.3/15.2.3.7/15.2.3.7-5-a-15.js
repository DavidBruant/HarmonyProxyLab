wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        JSON.prop = wrapTestObject({ value: 15 });
        Object.defineProperties(obj, JSON);
        return obj.hasOwnProperty('prop') && obj.prop === 15;
    } finally {
        delete JSON.prop;
    }
});
runTestCase(testcase);