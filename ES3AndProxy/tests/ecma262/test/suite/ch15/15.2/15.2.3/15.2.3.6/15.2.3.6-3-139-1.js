wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Function.prototype.value = 'Function';
        var funObj = wrapTestObject(function (a, b) {
                return a + b;
            });
        Object.defineProperty(obj, 'property', funObj);
        return obj.property === 'Function';
    } finally {
        delete Function.prototype.value;
    }
});
runTestCase(testcase);