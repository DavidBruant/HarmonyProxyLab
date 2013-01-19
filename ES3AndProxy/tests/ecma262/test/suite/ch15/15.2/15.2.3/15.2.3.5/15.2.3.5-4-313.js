var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    set: wrapTestObject(function () {
                    }),
                    get: wrapTestObject(function () {
                    }),
                    enumerable: true
                })
            }));
        var hasProperty = newObj.hasOwnProperty('prop');
        delete newObj.prop;
        var isNotConfigurable = newObj.hasOwnProperty('prop');
        return hasProperty && isNotConfigurable;
    });
runTestCase(testcase);