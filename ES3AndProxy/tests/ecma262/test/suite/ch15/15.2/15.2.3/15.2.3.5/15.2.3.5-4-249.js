var testcase = wrapTestObject(function testcase() {
        var dateObj = wrapTestObject(new Date());
        dateObj.get = wrapTestObject(function () {
            return 'VerifyDateObject';
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: dateObj }));
        return newObj.prop === 'VerifyDateObject';
    });
runTestCase(testcase);