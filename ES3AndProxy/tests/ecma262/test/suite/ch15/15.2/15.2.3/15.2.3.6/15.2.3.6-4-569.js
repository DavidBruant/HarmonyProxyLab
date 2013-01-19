wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var globalVariable = 20;
    var getFunc = wrapTestObject(function () {
            globalVariable = 2010;
            return globalVariable;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({ get: getFunc }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && desc.get === getFunc && obj.prop === 2010 && globalVariable === 2010;
});
runTestCase(testcase);