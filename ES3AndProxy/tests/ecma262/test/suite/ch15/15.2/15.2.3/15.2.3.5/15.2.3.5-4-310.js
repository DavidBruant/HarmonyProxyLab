var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    set: wrapTestObject(function () {
                    }),
                    enumerable: true,
                    configurable: true
                })
            }));
        return newObj.hasOwnProperty('prop') && newObj.prop === undefined;
    });
runTestCase(testcase);