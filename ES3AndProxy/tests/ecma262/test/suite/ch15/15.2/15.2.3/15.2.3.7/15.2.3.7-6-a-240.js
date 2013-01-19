var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var obj1 = wrapTestObject({ value: 12 });
        var obj2 = wrapTestObject({ value: 36 });
        Object.defineProperty(arr, '1', wrapTestObject({ value: obj1 }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: obj2 }) }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, '1', obj1, false, false, false);
        }
    });
runTestCase(testcase);