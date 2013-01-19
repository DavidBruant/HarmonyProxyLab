var testcase = wrapTestObject(function testcase() {
        var setFun = wrapTestObject(function () {
            });
        var obj = wrapTestObject({});
        try {
            Object.defineProperties(obj, wrapTestObject({
                prop: wrapTestObject({
                    writable: true,
                    set: setFun
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);