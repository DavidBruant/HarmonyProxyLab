wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Number.prototype.value = 'Number';
        var numObj = wrapTestObject(new Number(-2));
        Object.defineProperty(obj, 'property', numObj);
        return obj.property === 'Number';
    } finally {
        delete Number.prototype.value;
    }
});
runTestCase(testcase);