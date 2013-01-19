var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject([
                1,
                ,
                3,
                ,
                5
            ]);
        Object.defineProperty(obj, '10000', wrapTestObject({
            get: wrapTestObject(function () {
                return 'ElementWithLargeIndex';
            }),
            enumerable: true,
            configurable: true
        }));
        var arr = Object.keys(obj);
        for (var p in arr) {
            if (arr[p] === '10000') {
                return true;
            }
        }
        return false;
    });
runTestCase(testcase);