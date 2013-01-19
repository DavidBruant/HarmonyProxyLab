var testcase = wrapTestObject(function testcase() {
        var getFun = wrapTestObject(function () {
            });
        var obj = wrapTestObject({});
        try {
            Object.defineProperties(obj, wrapTestObject({
                prop: wrapTestObject({
                    value: 12,
                    get: getFun
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);