var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({
            length: wrapTestObject({
                writable: true,
                enumerable: false,
                configurable: false
            })
        }));
        var verifyValue = false;
        verifyValue = arr.length === 0;
        var verifyWritable = false;
        arr.length = 2;
        verifyWritable = arr.length === 2;
        var verifyEnumerable = false;
        for (var p in arr) {
            if (p === 'length') {
                verifyEnumerable = true;
            }
        }
        var verifyConfigurable = false;
        delete arr.length;
        verifyConfigurable = arr.hasOwnProperty('length');
        return verifyValue && verifyWritable && !verifyEnumerable && verifyConfigurable;
    });
runTestCase(testcase);