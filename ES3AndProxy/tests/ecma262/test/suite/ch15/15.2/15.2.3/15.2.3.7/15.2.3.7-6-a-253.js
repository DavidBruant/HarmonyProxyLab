var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([12]);
        try {
            Object.defineProperties(arr, wrapTestObject({
                '0': wrapTestObject({
                    value: 36,
                    writable: false,
                    configurable: false
                })
            }));
            return dataPropertyAttributesAreCorrect(arr, '0', 36, false, true, false);
        } catch (ex) {
            return false;
        }
    });
runTestCase(testcase);