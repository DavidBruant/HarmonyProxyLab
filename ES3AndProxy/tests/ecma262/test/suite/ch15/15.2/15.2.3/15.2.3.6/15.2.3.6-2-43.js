var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var ownProp = wrapTestObject({
                toString: wrapTestObject(function () {
                    return 'abc';
                })
            });
        Object.defineProperty(obj, ownProp, wrapTestObject({}));
        return obj.hasOwnProperty('abc');
    });
runTestCase(testcase);