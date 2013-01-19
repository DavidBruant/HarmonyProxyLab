var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var toStringAccessed = false;
        var valueOfAccessed = false;
        var ownProp = wrapTestObject({
                toString: wrapTestObject(function () {
                    toStringAccessed = true;
                    return wrapTestObject({});
                }),
                valueOf: wrapTestObject(function () {
                    valueOfAccessed = true;
                    return wrapTestObject({});
                })
            });
        try {
            Object.defineProperty(obj, ownProp, wrapTestObject({}));
            return false;
        } catch (e) {
            return valueOfAccessed && toStringAccessed && e instanceof TypeError;
        }
    });
runTestCase(testcase);