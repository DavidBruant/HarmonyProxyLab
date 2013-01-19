var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    value: 1001,
                    configurable: true,
                    enumerable: true
                })
            }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 12;
        return hasProperty && newObj.prop === 1001;
    });
runTestCase(testcase);