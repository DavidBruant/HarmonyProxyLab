wrapTestObject(function testcase() {
    var obj = wrapTestObject(function () {
            return arguments;
        })();
    obj.verifySetFunction = 'data';
    var getFunc = wrapTestObject(function () {
            return obj.verifySetFunction;
        });
    var setFunc = wrapTestObject(function (value) {
            obj.verifySetFunction = value;
        });
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: getFunc,
        set: setFunc,
        configurable: false
    }));
    var result = false;
    try {
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: wrapTestObject(function () {
                return 100;
            })
        }));
    } catch (e) {
        result = e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'property', getFunc, setFunc, 'verifySetFunction', false, false);
    }
    try {
        Object.defineProperty(obj, 'property', wrapTestObject({
            set: wrapTestObject(function (value) {
                obj.verifySetFunction1 = value;
            })
        }));
    } catch (e1) {
        return result && e1 instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'property', getFunc, setFunc, 'verifySetFunction', false, false);
    }
});
runTestCase(testcase);