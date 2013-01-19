wrapTestObject(function testcase() {
    try {
        JSON.value = 'JSONValue';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: JSON }));
        return newObj.prop === 'JSONValue';
    } finally {
        delete JSON.value;
    }
});
runTestCase(testcase);