var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ value: 100 }) }));
        return newObj.prop === 100;
    });
runTestCase(testcase);