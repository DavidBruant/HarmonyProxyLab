var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Array.prototype, '0', wrapTestObject({
                value: 11,
                configurable: true
            }));
            var arrObj = wrapTestObject([]);
            Object.defineProperty(arrObj, '0', wrapTestObject({
                get: wrapTestObject(function () {
                }),
                configurable: false
            }));
            Object.defineProperty(arrObj, '0', wrapTestObject({ configurable: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        } finally {
            delete Array.prototype[0];
        }
    });
runTestCase(testcase);