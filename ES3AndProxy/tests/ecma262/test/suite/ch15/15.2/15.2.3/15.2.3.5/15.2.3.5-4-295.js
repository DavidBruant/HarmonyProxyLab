var testcase = wrapTestObject(function testcase() {
        try {
            Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ set: 123 }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);