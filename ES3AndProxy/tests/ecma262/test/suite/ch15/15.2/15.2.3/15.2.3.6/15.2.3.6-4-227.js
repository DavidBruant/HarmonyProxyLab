var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var obj1 = wrapTestObject({ length: 10 });
        Object.defineProperty(arrObj, 0, wrapTestObject({
            value: obj1,
            writable: false,
            configurable: false
        }));
        var obj2 = wrapTestObject({ length: 20 });
        try {
            Object.defineProperty(arrObj, '0', wrapTestObject({ value: obj2 }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '0', obj1, false, false, false);
        }
    });
runTestCase(testcase);