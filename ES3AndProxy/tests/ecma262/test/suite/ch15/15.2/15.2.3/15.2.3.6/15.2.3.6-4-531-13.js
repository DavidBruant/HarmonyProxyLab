wrapTestObject(function testcase() {
    var obj = fnGlobalObject();
    try {
        obj.verifySetFunction = 'data';
        Object.defineProperty(obj, '0', wrapTestObject({
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
        Object.defineProperty(obj, '0', wrapTestObject({
            get: getFunc,
            set: setFunc
        }));
        return accessorPropertyAttributesAreCorrect(obj, '0', getFunc, setFunc, 'verifySetFunction1', false, true);
    } finally {
        delete obj[0];
        delete obj.verifySetFunction;
        delete obj.verifySetFunction1;
    }
});
runTestCase(testcase);