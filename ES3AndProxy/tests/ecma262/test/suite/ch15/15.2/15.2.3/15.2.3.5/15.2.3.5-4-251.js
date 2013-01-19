var testcase = wrapTestObject(function testcase() {
        try {
            Math.get = wrapTestObject(function () {
                return 'VerifyMathObject';
            });
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: Math }));
            return newObj.prop === 'VerifyMathObject';
        } finally {
            delete Math.get;
        }
    });
runTestCase(testcase);