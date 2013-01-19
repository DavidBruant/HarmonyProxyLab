var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var setFun = wrapTestObject(function (value) {
                data = value;
            });
        try {
            JSON.prop = wrapTestObject({ set: setFun });
            var obj = wrapTestObject({});
            Object.defineProperties(obj, JSON);
            obj.prop = 'JSONData';
            return obj.hasOwnProperty('prop') && data === 'JSONData';
        } finally {
            delete JSON.prop;
        }
    });
runTestCase(testcase);