wrapTestObject(function testcase() {
    var obj = wrapTestObject({ '1': 1 });
    var toStringAccessed = false;
    var valueOfAccessed = false;
    var ownProp = wrapTestObject({
            toString: wrapTestObject(function () {
                toStringAccessed = true;
                return wrapTestObject([1]);
            }),
            valueOf: wrapTestObject(function () {
                valueOfAccessed = true;
                return wrapTestObject([1]);
            })
        });
    try {
        Object.getOwnPropertyDescriptor(obj, ownProp);
        return false;
    } catch (e) {
        return toStringAccessed && valueOfAccessed && e instanceof TypeError;
    }
});
runTestCase(testcase);