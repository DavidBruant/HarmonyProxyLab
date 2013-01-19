var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(function (a, b) {
                return a + b;
            });
        obj[1] = 'ownProperty';
        var desc = Object.getOwnPropertyDescriptor(obj, '1');
        return desc.value === 'ownProperty';
    });
runTestCase(testcase);