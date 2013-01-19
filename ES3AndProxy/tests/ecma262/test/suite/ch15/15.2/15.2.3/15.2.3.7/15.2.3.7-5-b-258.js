var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var setFun = wrapTestObject(function (value) {
                data = value;
            });
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({ set: setFun }) }));
        obj.prop = 'funData';
        return obj.hasOwnProperty('prop') && data === 'funData';
    });
runTestCase(testcase);