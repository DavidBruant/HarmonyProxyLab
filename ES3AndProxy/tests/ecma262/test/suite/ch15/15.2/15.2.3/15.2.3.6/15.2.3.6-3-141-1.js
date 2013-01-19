var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            String.prototype.value = 'String';
            var strObj = wrapTestObject(new String('abc'));
            Object.defineProperty(obj, 'property', strObj);
            return obj.property === 'String';
        } finally {
            delete String.prototype.value;
        }
    });
runTestCase(testcase);