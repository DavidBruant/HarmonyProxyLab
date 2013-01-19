var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ writable: -0 }) }));
        var hasProperty = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
        newObj.prop = 121;
        return hasProperty && typeof newObj.prop === 'undefined';
    });
runTestCase(testcase);