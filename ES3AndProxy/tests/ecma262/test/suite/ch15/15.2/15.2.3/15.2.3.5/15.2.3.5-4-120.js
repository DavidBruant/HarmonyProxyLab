var testcase = wrapTestObject(function testcase() {
        try {
            JSON.configurable = true;
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: JSON }));
            var result1 = newObj.hasOwnProperty('prop');
            delete newObj.prop;
            var result2 = newObj.hasOwnProperty('prop');
            return result1 === true && result2 === false;
        } finally {
            delete JSON.configurable;
        }
    });
runTestCase(testcase);