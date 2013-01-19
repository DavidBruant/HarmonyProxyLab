var testcase = wrapTestObject(function testcase() {
        try {
            Object.create(wrapTestObject({}), wrapTestObject({ prop: false }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);