var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'abc': 1 });
        var ownProp = wrapTestObject({
                toString: wrapTestObject(function () {
                    return 'abc';
                })
            });
        var desc = Object.getOwnPropertyDescriptor(obj, ownProp);
        return desc.value === 1;
    });
runTestCase(testcase);