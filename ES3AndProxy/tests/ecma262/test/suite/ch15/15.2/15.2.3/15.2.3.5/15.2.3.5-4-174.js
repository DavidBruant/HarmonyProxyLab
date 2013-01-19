var testcase = wrapTestObject(function testcase() {
        var errorObj = wrapTestObject(new Error());
        errorObj.value = 'ErrorValue';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: errorObj }));
        return newObj.prop === 'ErrorValue';
    });
runTestCase(testcase);