var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        try {
            Array.prototype.set = wrapTestObject(function (value) {
                data = value;
            });
            var arrObj = wrapTestObject([]);
            Object.defineProperty(obj, 'property', arrObj);
            obj.property = 'overrideData';
            return obj.hasOwnProperty('property') && data === 'overrideData';
        } finally {
            delete Array.prototype.set;
        }
    });
runTestCase(testcase);