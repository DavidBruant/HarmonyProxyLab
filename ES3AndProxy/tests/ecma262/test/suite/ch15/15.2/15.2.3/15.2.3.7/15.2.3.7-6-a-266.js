var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({
            'property': wrapTestObject({
                value: 12,
                writable: true,
                enumerable: true,
                configurable: true
            })
        }));
        return dataPropertyAttributesAreCorrect(arr, 'property', 12, true, true, true) && arr.length === 0;
    });
runTestCase(testcase);