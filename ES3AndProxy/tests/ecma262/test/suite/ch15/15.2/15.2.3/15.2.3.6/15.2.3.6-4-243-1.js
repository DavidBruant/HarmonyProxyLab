var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var getFunc = wrapTestObject(function getFunc() {
                return 3;
            });
        Object.defineProperty(arrObj, '1', wrapTestObject({
            get: getFunc,
            configurable: true
        }));
        arrObj[1] = 4;
        return accessorPropertyAttributesAreCorrect(arrObj, '1', getFunc, undefined, undefined, false, true);
    });
runTestCase(testcase);