var testcase = wrapTestObject(function testcase() {
        var dateObj = wrapTestObject(new Date());
        dateObj.value = 'DateValue';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: dateObj }));
        return newObj.prop === 'DateValue';
    });
runTestCase(testcase);