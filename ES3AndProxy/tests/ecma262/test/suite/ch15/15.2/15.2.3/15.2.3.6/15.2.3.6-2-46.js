wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var toStringAccessed = false;
    var valueOfAccessed = false;
    var ownProp = wrapTestObject({
            toString: wrapTestObject(function () {
                toStringAccessed = true;
                return 'abc';
            }),
            valueOf: wrapTestObject(function () {
                valueOfAccessed = true;
                return 'prop';
            })
        });
    Object.defineProperty(obj, ownProp, wrapTestObject({}));
    return obj.hasOwnProperty('abc') && !valueOfAccessed && toStringAccessed;
});
runTestCase(testcase);