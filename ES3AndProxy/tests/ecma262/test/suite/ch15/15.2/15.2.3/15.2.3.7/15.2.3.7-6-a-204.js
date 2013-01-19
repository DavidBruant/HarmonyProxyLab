var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var beforeDeleted = false;
        var afterDeleted = false;
        arr.verifySetter = 100;
        Object.defineProperties(arr, wrapTestObject({
            '0': wrapTestObject({
                set: wrapTestObject(function (value) {
                    arr.verifySetter = value;
                }),
                get: wrapTestObject(function () {
                    return arr.verifySetter;
                }),
                enumerable: true
            })
        }));
        beforeDeleted = arr.hasOwnProperty('0');
        delete arr[0];
        afterDeleted = arr.hasOwnProperty('0');
        arr[0] = 101;
        return beforeDeleted && afterDeleted && arr[0] === 101 && arr.verifySetter === 101;
    });
runTestCase(testcase);