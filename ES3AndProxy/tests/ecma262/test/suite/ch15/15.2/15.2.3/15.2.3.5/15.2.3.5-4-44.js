var testcase = wrapTestObject(function testcase() {
        try {
            Object.create(wrapTestObject({}), wrapTestObject({ prop: 12 }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);