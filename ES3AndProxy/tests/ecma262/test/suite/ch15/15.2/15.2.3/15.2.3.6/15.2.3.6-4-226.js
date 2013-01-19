var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var obj1 = wrapTestObject({ length: 10 });
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: obj1 }));
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: obj1 }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', obj1, false, false, false);
    });
runTestCase(testcase);