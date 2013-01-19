var testcase = wrapTestObject(function testcase() {
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        var data = 'data';
        argObj.set = wrapTestObject(function (value) {
            data = value;
        });
        var newobj = Object.create(wrapTestObject({}), wrapTestObject({ prop: argObj }));
        var hasProperty = newobj.hasOwnProperty('prop');
        newobj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    });
runTestCase(testcase);