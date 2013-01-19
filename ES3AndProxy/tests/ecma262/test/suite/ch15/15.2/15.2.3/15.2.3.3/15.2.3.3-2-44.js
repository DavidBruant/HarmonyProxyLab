wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'abc': 1 });
    var valueOfAccessed = false;
    var toStringAccessed = false;
    var ownProp = wrapTestObject({
            toString: wrapTestObject(function () {
                toStringAccessed = true;
                return wrapTestObject({});
            }),
            valueOf: wrapTestObject(function () {
                valueOfAccessed = true;
                return 'abc';
            })
        });
    var desc = Object.getOwnPropertyDescriptor(obj, ownProp);
    return desc.value === 1 && valueOfAccessed && toStringAccessed;
});
runTestCase(testcase);