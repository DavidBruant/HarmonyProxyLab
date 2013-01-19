var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Math.configurable = true;
            Object.defineProperties(obj, wrapTestObject({ prop: Math }));
            var result1 = obj.hasOwnProperty('prop');
            delete obj.prop;
            var result2 = obj.hasOwnProperty('prop');
            return result1 === true && result2 === false;
        } finally {
            delete Math.configurable;
        }
    });
runTestCase(testcase);