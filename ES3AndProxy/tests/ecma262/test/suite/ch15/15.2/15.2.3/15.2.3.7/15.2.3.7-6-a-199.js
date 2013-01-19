wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    var beforeDeleted = false;
    var afterDeleted = false;
    Object.defineProperties(arr, wrapTestObject({
        '0': wrapTestObject({
            value: 1001,
            writable: true,
            enumerable: true
        })
    }));
    beforeDeleted = arr.hasOwnProperty('0');
    delete arr[0];
    afterDeleted = arr.hasOwnProperty('0');
    return beforeDeleted && afterDeleted && arr[0] === 1001;
});
runTestCase(testcase);