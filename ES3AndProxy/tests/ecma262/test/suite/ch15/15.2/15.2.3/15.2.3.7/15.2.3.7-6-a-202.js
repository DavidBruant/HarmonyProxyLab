wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    var getFunc = wrapTestObject(function () {
            return 11;
        });
    Object.defineProperties(arr, wrapTestObject({
        '0': wrapTestObject({
            get: getFunc,
            enumerable: true,
            configurable: true
        })
    }));
    var verifyEnumerable = false;
    for (var i in arr) {
        if (i === '0' && arr.hasOwnProperty('0')) {
            verifyEnumerable = true;
        }
    }
    var desc = Object.getOwnPropertyDescriptor(arr, '0');
    var propertyDefineCorrect = arr.hasOwnProperty('0');
    var verifyConfigurable = false;
    delete arr[0];
    verifyConfigurable = arr.hasOwnProperty('0');
    return typeof desc.set === 'undefined' && propertyDefineCorrect && desc.get === getFunc && !verifyConfigurable && verifyEnumerable;
});
runTestCase(testcase);