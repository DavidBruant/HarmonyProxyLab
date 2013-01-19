var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: true }));
        return arrObj.length === 1;
    });
runTestCase(testcase);