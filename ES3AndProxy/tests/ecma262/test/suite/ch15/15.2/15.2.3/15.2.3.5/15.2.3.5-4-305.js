var testcase = wrapTestObject(function testcase() {
        try {
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ enumerable: true }) }));
            return newObj.hasOwnProperty('prop');
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);