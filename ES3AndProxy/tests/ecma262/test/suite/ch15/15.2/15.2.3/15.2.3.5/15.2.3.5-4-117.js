wrapTestObject(function testcase() {
    try {
        Math.configurable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: Math }));
        var result1 = newObj.hasOwnProperty('prop');
        delete newObj.prop;
        var result2 = newObj.hasOwnProperty('prop');
        return result1 === true && result2 === false;
    } finally {
        delete Math.configurable;
    }
});
runTestCase(testcase);