var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    get: wrapTestObject(function () {
                        return 'data';
                    })
                })
            }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && newObj.prop === 'data';
    });
runTestCase(testcase);