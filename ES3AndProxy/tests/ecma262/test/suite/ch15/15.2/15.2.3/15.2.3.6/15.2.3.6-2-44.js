wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var ownProp = wrapTestObject({
            valueOf: wrapTestObject(function () {
                return 'abc';
            }),
            toString: undefined
        });
    Object.defineProperty(obj, ownProp, wrapTestObject({}));
    return obj.hasOwnProperty('abc');
});
runTestCase(testcase);