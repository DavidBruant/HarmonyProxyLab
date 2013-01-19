var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ get: undefined }) }));
        return newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
    });
runTestCase(testcase);