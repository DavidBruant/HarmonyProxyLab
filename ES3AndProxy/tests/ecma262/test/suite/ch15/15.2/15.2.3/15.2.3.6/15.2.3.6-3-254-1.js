var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        try {
            Date.prototype.set = wrapTestObject(function (value) {
                data = value;
            });
            var dateObj = wrapTestObject(new Date());
            Object.defineProperty(obj, 'property', dateObj);
            obj.property = 'overrideData';
            return obj.hasOwnProperty('property') && data === 'overrideData';
        } finally {
            delete Date.prototype.set;
        }
    });
runTestCase(testcase);