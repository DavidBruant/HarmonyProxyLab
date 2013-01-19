var testcase = wrapTestObject(function testcase() {
        var obj = fnGlobalObject();
        try {
            obj.verifySetFunction = 'data';
            Object.defineProperty(obj, 'property', wrapTestObject({
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
            Object.defineProperty(obj, 'property', wrapTestObject({
                get: getFunc,
                set: setFunc
            }));
            return accessorPropertyAttributesAreCorrect(obj, 'property', getFunc, setFunc, 'verifySetFunction1', false, true);
        } finally {
            delete obj.property;
            delete obj.verifySetFunction;
            delete obj.verifySetFunction1;
        }
    });
runTestCase(testcase);