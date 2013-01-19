var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var getFunc = wrapTestObject(function () {
                return 11;
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            get: getFunc,
            configurable: false
        }));
        try {
            Object.defineProperty(arrObj, '0', wrapTestObject({ configurable: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, undefined, undefined, false, false);
        }
    });
runTestCase(testcase);