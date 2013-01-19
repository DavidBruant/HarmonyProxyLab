var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, 0, wrapTestObject({
            value: 'ownDataProperty',
            configurable: false
        }));
        try {
            Object.defineProperties(arr, wrapTestObject({
                '0': wrapTestObject({
                    value: 'abc',
                    configurable: true
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && arr[0] === 'ownDataProperty';
        }
    });
runTestCase(testcase);