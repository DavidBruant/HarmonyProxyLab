wrapTestObject(function testcase() {
    try {
        Object.create(wrapTestObject({}), wrapTestObject({
            prop: wrapTestObject({
                get: wrapTestObject(function () {
                }),
                value: 100
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);