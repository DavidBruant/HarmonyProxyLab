wrapTestObject(function testcase() {
    var obj = wrapTestObject({ prop1: 1001 });
    var arr = Object.getOwnPropertyNames(obj);
    return arr.hasOwnProperty(0) && arr[0] === 'prop1';
});
runTestCase(testcase);