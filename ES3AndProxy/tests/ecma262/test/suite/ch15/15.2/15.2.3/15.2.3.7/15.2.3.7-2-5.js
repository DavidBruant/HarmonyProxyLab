wrapTestObject(function testcase() {
    var obj = wrapTestObject({ '123': 100 });
    var obj1 = Object.defineProperties(obj, -12);
    return obj === obj1;
});
runTestCase(testcase);