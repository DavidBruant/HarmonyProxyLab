var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var toStringAccessed = false;
        var valueOfAccessed = false;
        try {
            Object.defineProperties(arr, wrapTestObject({
                length: wrapTestObject({
                    value: wrapTestObject({
                        toString: wrapTestObject(function () {
                            toStringAccessed = true;
                            return wrapTestObject({});
                        }),
                        valueOf: wrapTestObject(function () {
                            valueOfAccessed = true;
                            return wrapTestObject({});
                        })
                    })
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && toStringAccessed && valueOfAccessed;
        }
    });
runTestCase(testcase);