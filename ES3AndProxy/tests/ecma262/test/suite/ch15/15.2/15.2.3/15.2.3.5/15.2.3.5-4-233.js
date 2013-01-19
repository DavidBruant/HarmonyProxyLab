var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    get: wrapTestObject(function () {
                        return 'ownDataProperty';
                    })
                })
            }));
        return newObj.prop === 'ownDataProperty';
    });
runTestCase(testcase);