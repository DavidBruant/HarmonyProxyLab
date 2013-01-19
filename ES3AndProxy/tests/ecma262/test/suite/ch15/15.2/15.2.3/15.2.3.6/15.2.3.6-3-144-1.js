var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Object.prototype.value = 'Math';
            Object.defineProperty(obj, 'property', Math);
            return obj.property === 'Math';
        } finally {
            delete Object.prototype.value;
        }
    });
runTestCase(testcase);