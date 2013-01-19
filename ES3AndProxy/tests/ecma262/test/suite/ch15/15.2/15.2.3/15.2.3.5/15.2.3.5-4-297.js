var testcase = wrapTestObject(function testcase() {
        try {
            Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ set: wrapTestObject(new Date()) }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);