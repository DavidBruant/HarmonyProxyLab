wrapTestObject(function testcase() {
    try {
        JSON.prop = wrapTestObject({
            value: 12,
            enumerable: true
        });
        var newObj = Object.create(wrapTestObject({}), JSON);
        return newObj.hasOwnProperty('prop');
    } finally {
        delete JSON.prop;
    }
});
runTestCase(testcase);