wrapTestObject(function testcase() {
    try {
        Object.create(wrapTestObject({}), wrapTestObject({
            prop: wrapTestObject({
                get: wrapTestObject([
                    1,
                    2,
                    3
                ])
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);