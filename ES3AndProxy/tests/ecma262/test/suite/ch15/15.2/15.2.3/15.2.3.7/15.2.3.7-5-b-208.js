var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var descObj = wrapTestObject(new Number(-9));
        descObj.get = wrapTestObject(function () {
            return 'Number';
        });
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        return obj.property === 'Number';
    });
runTestCase(testcase);