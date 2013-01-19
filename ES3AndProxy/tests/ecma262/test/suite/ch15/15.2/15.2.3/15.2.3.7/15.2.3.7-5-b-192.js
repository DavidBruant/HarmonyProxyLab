var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var setter = wrapTestObject(function () {
            });
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ set: setter }) }));
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    });
runTestCase(testcase);