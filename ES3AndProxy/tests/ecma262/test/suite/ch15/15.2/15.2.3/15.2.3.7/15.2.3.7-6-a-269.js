var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        arr.property = 12;
        Object.defineProperties(arr, wrapTestObject({
            'property': wrapTestObject({
                writable: false,
                enumerable: false,
                configurable: false
            })
        }));
        return dataPropertyAttributesAreCorrect(arr, 'property', 12, false, false, false) && arr.length === 0;
    });
runTestCase(testcase);