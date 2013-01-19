var testcase = wrapTestObject(function testcase() {
        var isEnumerable = false;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    value: 1001,
                    writable: true,
                    configurable: true
                })
            }));
        var hasProperty = newObj.hasOwnProperty('prop');
        for (var p in newObj) {
            if (p === 'prop') {
                isEnumerable = true;
            }
        }
        return hasProperty && !isEnumerable;
    });
runTestCase(testcase);