var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({
                'bbq': 1,
                'abc': 2
            });
        var valueOfAccessed = false;
        var ownProp = wrapTestObject({
                toString: wrapTestObject(function () {
                    return 'bbq';
                }),
                valueOf: wrapTestObject(function () {
                    valueOfAccessed = true;
                    return 'abc';
                })
            });
        var desc = Object.getOwnPropertyDescriptor(obj, ownProp);
        return desc.value === 1 && !valueOfAccessed;
    });
runTestCase(testcase);