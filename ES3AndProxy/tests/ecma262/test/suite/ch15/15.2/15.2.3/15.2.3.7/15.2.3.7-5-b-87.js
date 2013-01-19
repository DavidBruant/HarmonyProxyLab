var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ configurable: true }) }));
        var hadOwnProperty = obj.hasOwnProperty('property');
        delete obj.property;
        return !obj.hasOwnProperty('property') && hadOwnProperty;
    });
runTestCase(testcase);