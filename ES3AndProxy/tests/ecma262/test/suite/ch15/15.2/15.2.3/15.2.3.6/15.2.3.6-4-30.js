var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: wrapTestObject(function () {
            }),
            configurable: false
        }));
        try {
            Object.defineProperty(obj, 'foo', wrapTestObject({ configurable: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);