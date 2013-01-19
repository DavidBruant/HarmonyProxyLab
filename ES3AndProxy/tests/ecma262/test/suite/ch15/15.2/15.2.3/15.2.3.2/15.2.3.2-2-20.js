wrapTestObject(function testcase() {
    var obj = wrapTestObject(function (a, b) {
            return a + b;
        });
    return Object.getPrototypeOf(obj) === Function.prototype;
});
runTestCase(testcase);