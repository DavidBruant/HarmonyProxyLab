var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var funObj = wrapTestObject(function (a, b) {
                return a + b;
            });
        funObj.value = 'Function';
        Object.defineProperty(obj, 'property', funObj);
        return obj.property === 'Function';
    });
runTestCase(testcase);