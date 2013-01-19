wrapTestObject(function testcase() {
    var obj = wrapTestObject(new String('xyz'));
    obj[-20] = -20;
    obj[20] = 20;
    Object.defineProperty(obj, 'prop', wrapTestObject({
        value: 1003,
        enumerable: false,
        configurable: true
    }));
    var arr = Object.keys(obj);
    for (var i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            return false;
        }
    }
    return true;
});
runTestCase(testcase);