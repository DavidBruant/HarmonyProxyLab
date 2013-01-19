var testcase = wrapTestObject(function testcase() {
        var strObj = wrapTestObject(new String('abc'));
        strObj.get = wrapTestObject(function () {
            return 'VerifyStringObject';
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: strObj }));
        return newObj.prop === 'VerifyStringObject';
    });
runTestCase(testcase);