var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({ configurable: true }) }));
        var result1 = obj.hasOwnProperty('prop');
        delete obj.prop;
        var result2 = obj.hasOwnProperty('prop');
        return result1 === true && result2 === false;
    });
runTestCase(testcase);