var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attributes = wrapTestObject({
                get: wrapTestObject(function () {
                    return 'ownDataProperty';
                })
            });
        Object.defineProperty(obj, 'property', attributes);
        return obj.property === 'ownDataProperty';
    });
runTestCase(testcase);