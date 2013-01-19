wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Function.prototype.writable = true;
        var funObj = wrapTestObject(function (a, b) {
                return a + b;
            });
        Object.defineProperty(obj, 'property', funObj);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    } finally {
        delete Function.prototype.writable;
    }
});
runTestCase(testcase);