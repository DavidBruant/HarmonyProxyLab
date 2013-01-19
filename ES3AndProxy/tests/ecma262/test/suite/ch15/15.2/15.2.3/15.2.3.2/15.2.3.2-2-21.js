var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([
                1,
                2,
                3
            ]);
        return Object.getPrototypeOf(arr) === Array.prototype;
    });
runTestCase(testcase);