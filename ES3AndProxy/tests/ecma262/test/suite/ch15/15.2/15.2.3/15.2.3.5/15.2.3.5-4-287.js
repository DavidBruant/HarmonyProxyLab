var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        try {
            JSON.set = wrapTestObject(function (value) {
                data = value;
            });
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: JSON }));
            var hasProperty = newObj.hasOwnProperty('prop');
            newObj.prop = 'overrideData';
            return hasProperty && data === 'overrideData';
        } finally {
            delete JSON.set;
        }
    });
runTestCase(testcase);