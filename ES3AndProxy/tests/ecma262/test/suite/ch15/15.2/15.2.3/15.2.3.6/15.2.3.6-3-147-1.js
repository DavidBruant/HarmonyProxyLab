var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Object.prototype.value = 'JSON';
            Object.defineProperty(obj, 'property', JSON);
            return obj.property === 'JSON';
        } finally {
            delete Object.prototype.value;
        }
    });
runTestCase(testcase);