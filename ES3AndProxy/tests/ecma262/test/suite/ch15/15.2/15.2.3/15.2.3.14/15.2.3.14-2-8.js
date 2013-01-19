var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({
                prop1: 1001,
                prop2: wrapTestObject(function () {
                    return 1002;
                })
            });
        Object.defineProperty(obj, 'prop3', wrapTestObject({
            value: 1003,
            enumerable: false,
            configurable: true
        }));
        Object.defineProperty(obj, 'prop4', wrapTestObject({
            get: wrapTestObject(function () {
                return 1004;
            }),
            enumerable: false,
            configurable: true
        }));
        var arr = Object.keys(obj);
        return arr.length === 2 && arr[0] === 'prop1' && arr[1] === 'prop2';
    });
runTestCase(testcase);