var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ configurable: wrapTestObject(new Number(-123)) }) }));
        var preCheck = obj.hasOwnProperty('property');
        delete obj.property;
        return preCheck && !obj.hasOwnProperty('property');
    });
runTestCase(testcase);