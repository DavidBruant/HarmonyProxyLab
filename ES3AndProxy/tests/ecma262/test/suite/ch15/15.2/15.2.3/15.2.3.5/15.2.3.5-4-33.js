var testcase = wrapTestObject(function testcase() {
        try {
            Math.prop = wrapTestObject({
                value: 12,
                enumerable: true
            });
            var newObj = Object.create(wrapTestObject({}), Math);
            return newObj.hasOwnProperty('prop');
        } finally {
            delete Math.prop;
        }
    });
runTestCase(testcase);