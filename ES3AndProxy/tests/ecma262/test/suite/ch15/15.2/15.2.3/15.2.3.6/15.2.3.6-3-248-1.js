var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        try {
            Function.prototype.set = wrapTestObject(function (value) {
                data = value;
            });
            var funObj = wrapTestObject(function () {
                });
            Object.defineProperty(obj, 'property', funObj);
            obj.property = 'overrideData';
            return obj.hasOwnProperty('property') && data === 'overrideData';
        } finally {
            delete Function.prototype.set;
        }
    });
runTestCase(testcase);