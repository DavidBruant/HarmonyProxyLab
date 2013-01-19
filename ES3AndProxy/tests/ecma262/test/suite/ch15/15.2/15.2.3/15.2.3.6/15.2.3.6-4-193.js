var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Array.prototype, '0', wrapTestObject({
                get: wrapTestObject(function () {
                    return 11;
                }),
                configurable: true
            }));
            var arrObj = wrapTestObject([]);
            Object.defineProperty(arrObj, '0', wrapTestObject({
                value: 12,
                configurable: false
            }));
            Object.defineProperty(arrObj, '0', wrapTestObject({ configurable: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError && Array.prototype[0] === 11 && arrObj[0] === 12;
        } finally {
            delete Array.prototype[0];
        }
    });
runTestCase(testcase);