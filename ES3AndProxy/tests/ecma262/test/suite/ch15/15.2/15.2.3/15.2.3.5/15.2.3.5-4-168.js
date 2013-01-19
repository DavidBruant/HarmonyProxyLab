var testcase = wrapTestObject(function testcase() {
        var booleanObj = wrapTestObject(new Boolean(false));
        booleanObj.value = 'BooleanValue';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: booleanObj }));
        return newObj.prop === 'BooleanValue';
    });
runTestCase(testcase);