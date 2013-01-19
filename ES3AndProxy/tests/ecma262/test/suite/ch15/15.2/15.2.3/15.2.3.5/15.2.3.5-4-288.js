var testcase = wrapTestObject(function testcase() {
        var errObj = wrapTestObject(new Error('error'));
        var data = 'data';
        errObj.set = wrapTestObject(function (value) {
            data = value;
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: errObj }));
        newObj.prop = 'overrideData';
        return newObj.hasOwnProperty('prop') && data === 'overrideData';
    });
runTestCase(testcase);