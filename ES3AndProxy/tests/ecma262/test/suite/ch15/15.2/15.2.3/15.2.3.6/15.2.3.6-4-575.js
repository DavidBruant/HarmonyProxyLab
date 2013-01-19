var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var globalVariable = 20;
        var setFunc = wrapTestObject(function () {
                globalVariable = 2010;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({ set: setFunc }));
        obj.prop = 10;
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.hasOwnProperty('prop') && desc.set === setFunc && globalVariable === 2010;
    });
runTestCase(testcase);