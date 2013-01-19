var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        try {
            fnGlobalObject().set = wrapTestObject(function (value) {
                data = value;
            });
            Object.defineProperty(obj, 'property', fnGlobalObject());
            obj.property = 'overrideData';
            return obj.hasOwnProperty('property') && data === 'overrideData';
        } finally {
            delete fnGlobalObject().set;
        }
    });
runTestCase(testcase);