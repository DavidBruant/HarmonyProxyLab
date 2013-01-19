wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        JSON.configurable = true;
        Object.defineProperties(obj, wrapTestObject({ prop: JSON }));
        var result1 = obj.hasOwnProperty('prop');
        delete obj.prop;
        var result2 = obj.hasOwnProperty('prop');
        return result1 === true && result2 === false;
    } finally {
        delete JSON.configurable;
    }
});
runTestCase(testcase);