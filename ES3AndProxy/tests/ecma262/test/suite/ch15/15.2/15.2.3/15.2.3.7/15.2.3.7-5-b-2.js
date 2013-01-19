var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Object.defineProperties(obj, wrapTestObject({ prop: null }));
            return false;
        } catch (e) {
            return e instanceof TypeError && !obj.hasOwnProperty('prop');
            ;
        }
    });
runTestCase(testcase);