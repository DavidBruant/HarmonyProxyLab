wrapTestObject(function testcase() {
    try {
        Object.create(wrapTestObject({}), wrapTestObject({
            prop: wrapTestObject({
                set: wrapTestObject(function () {
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