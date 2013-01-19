var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Date.prototype.get = wrapTestObject(function () {
                return 'dateGetProperty';
            });
            var dateObj = wrapTestObject(new Date());
            Object.defineProperty(obj, 'property', dateObj);
            return obj.property === 'dateGetProperty';
        } finally {
            delete Date.prototype.get;
        }
    });
runTestCase(testcase);