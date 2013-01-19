var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var obj = wrapTestObject({ length: 10 });
        Object.defineProperty(arrObj, '1', wrapTestObject({ value: obj }));
        try {
            Object.defineProperty(arrObj, '1', wrapTestObject({ value: wrapTestObject({}) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '1', obj, false, false, false);
        }
    });
runTestCase(testcase);