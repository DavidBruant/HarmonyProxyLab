var testcase = wrapTestObject(function testcase() {
        var sparseArr = wrapTestObject([
                0,
                1
            ]);
        sparseArr[10000] = 10000;
        sparseArr = Object.freeze(sparseArr);
        return Object.isFrozen(sparseArr);
    });
runTestCase(testcase);