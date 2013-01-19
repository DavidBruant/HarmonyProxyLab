wrapTestObject(function testcase() {
    var obj = wrapTestObject([]);
    obj.verifySetFunction = 'data';
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            return obj.verifySetFunction;
        }),
        set: wrapTestObject(function (value) {
            obj.verifySetFunction = value;
        }),
        configurable: true
    }));
    obj.verifySetFunction1 = 'data1';
    var getFunc = wrapTestObject(function () {
            return obj.verifySetFunction1;
        });
    var setFunc = wrapTestObject(function (value) {
            obj.verifySetFunction1 = value;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: getFunc,
        set: setFunc
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'prop', getFunc, setFunc, 'verifySetFunction1', false, true);
});
runTestCase(testcase);