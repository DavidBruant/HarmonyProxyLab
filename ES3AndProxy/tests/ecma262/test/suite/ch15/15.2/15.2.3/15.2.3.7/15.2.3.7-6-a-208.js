var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        arr[0] = 100;
        Object.defineProperties(arr, wrapTestObject({
            '0': wrapTestObject({
                value: 100,
                writable: true,
                enumerable: true,
                configurable: true
            })
        }));
        return dataPropertyAttributesAreCorrect(arr, '0', 100, true, true, true);
    });
runTestCase(testcase);