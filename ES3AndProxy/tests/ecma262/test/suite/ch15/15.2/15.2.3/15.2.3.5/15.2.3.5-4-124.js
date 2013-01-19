var testcase = wrapTestObject(function testcase() {
        try {
            fnGlobalObject().configurable = true;
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: fnGlobalObject() }));
            var result1 = newObj.hasOwnProperty('prop');
            delete newObj.prop;
            var result2 = newObj.hasOwnProperty('prop');
            return result1 === true && result2 === false;
        } finally {
            delete fnGlobalObject().configurable;
        }
    });
runTestCase(testcase);