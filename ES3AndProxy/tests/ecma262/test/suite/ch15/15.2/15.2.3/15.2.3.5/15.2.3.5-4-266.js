var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    set: wrapTestObject(function (value) {
                        data = value;
                    })
                })
            }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    });
runTestCase(testcase);