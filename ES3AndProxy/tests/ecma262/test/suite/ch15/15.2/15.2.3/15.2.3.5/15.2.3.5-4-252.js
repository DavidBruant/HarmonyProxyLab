var testcase = wrapTestObject(function testcase() {
        JSON.get = wrapTestObject(function () {
            return 'VerifyJSONObject';
        });
        try {
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: JSON }));
            return newObj.prop === 'VerifyJSONObject';
        } finally {
            delete JSON.get;
        }
    });
runTestCase(testcase);