wrapTestObject(function testcase() {
    var obj = wrapTestObject({
            '[object Object]': 1,
            'abc': 2
        });
    var ownProp = wrapTestObject({
            valueOf: wrapTestObject(function () {
                return 'abc';
            })
        });
    var desc = Object.getOwnPropertyDescriptor(obj, ownProp);
    return desc.value === 1;
});
runTestCase(testcase);