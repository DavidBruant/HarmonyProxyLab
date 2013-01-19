var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    set: wrapTestObject(function (value) {
                        data = value;
                    })
                })
            }));
        newObj.prop = 'overrideData';
        return newObj.hasOwnProperty('prop') && data === 'overrideData';
    });
runTestCase(testcase);