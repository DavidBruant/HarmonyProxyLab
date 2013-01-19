var testcase = wrapTestObject(function testcase() {
        var accessed = false;
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ enumerable: argObj }) }));
        for (var property in newObj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);