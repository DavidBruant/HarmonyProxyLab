var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({
                prop1: 1001,
                prop2: 1002
            });
        Object.defineProperty(obj, 'prop3', wrapTestObject({
            value: 1003,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(obj, 'prop4', wrapTestObject({
            value: 1004,
            enumerable: false,
            configurable: true
        }));
        var arr = Object.keys(obj);
        for (var p in arr) {
            if (arr.hasOwnProperty(p)) {
                if (arr[p] === 'prop4') {
                    return false;
                }
            }
        }
        return true;
    });
runTestCase(testcase);