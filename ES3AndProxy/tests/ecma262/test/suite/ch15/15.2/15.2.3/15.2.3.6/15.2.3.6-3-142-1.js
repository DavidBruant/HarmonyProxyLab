var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Boolean.prototype.value = 'Boolean';
            var boolObj = wrapTestObject(new Boolean(true));
            Object.defineProperty(obj, 'property', boolObj);
            return obj.property === 'Boolean';
        } finally {
            delete Boolean.prototype.value;
        }
    });
runTestCase(testcase);