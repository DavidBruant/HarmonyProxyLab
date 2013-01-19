var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Error.prototype.value = 'Error';
            var errObj = wrapTestObject(new Error());
            Object.defineProperty(obj, 'property', errObj);
            return obj.property === 'Error';
        } finally {
            delete Error.prototype.value;
        }
    });
runTestCase(testcase);