wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        RegExp.prototype.value = 'RegExp';
        var regObj = wrapTestObject(new RegExp());
        Object.defineProperty(obj, 'property', regObj);
        return obj.property === 'RegExp';
    } finally {
        delete RegExp.prototype.value;
    }
});
runTestCase(testcase);