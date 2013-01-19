var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        arrObj[0] = 101;
        Object.defineProperty(arrObj, '0', wrapTestObject({}));
        return dataPropertyAttributesAreCorrect(arrObj, '0', 101, true, true, true);
    });
runTestCase(testcase);