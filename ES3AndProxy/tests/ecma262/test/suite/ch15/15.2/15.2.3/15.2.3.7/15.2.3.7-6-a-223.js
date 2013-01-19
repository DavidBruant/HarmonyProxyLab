var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '0', wrapTestObject({ enumerable: true }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ enumerable: true }) }));
            return dataPropertyAttributesAreCorrect(arr, '0', undefined, false, true, false);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);