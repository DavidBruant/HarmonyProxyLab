var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        try {
            Number.prototype.set = wrapTestObject(function (value) {
                data = value;
            });
            var numObj = wrapTestObject(new Number(-2));
            Object.defineProperty(obj, 'property', numObj);
            obj.property = 'overrideData';
            return obj.hasOwnProperty('property') && data === 'overrideData';
        } finally {
            delete Number.prototype.set;
        }
    });
runTestCase(testcase);