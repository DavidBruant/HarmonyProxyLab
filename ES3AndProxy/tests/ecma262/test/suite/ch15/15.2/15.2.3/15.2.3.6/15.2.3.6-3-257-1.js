var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        try {
            Error.prototype.set = wrapTestObject(function (value) {
                data = value;
            });
            var errObj = wrapTestObject(new Error());
            Object.defineProperty(obj, 'property', errObj);
            obj.property = 'overrideData';
            return obj.hasOwnProperty('property') && data === 'overrideData';
        } finally {
            delete Error.prototype.set;
        }
    });
runTestCase(testcase);