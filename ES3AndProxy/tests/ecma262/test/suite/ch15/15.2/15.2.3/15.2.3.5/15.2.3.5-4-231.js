wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({
            prop: wrapTestObject({
                get: wrapTestObject(function () {
                    return 'present';
                })
            })
        }));
    return newObj.prop === 'present';
});
runTestCase(testcase);