wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    var toStringAccessed = false;
    var valueOfAccessed = false;
    try {
        Object.defineProperty(arrObj, 'length', wrapTestObject({
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
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && toStringAccessed && valueOfAccessed;
    }
});
runTestCase(testcase);