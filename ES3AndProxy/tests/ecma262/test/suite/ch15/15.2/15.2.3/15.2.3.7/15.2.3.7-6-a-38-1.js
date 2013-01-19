var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function () {
                return 12;
            });
        Object.defineProperties(obj, wrapTestObject({
            foo: wrapTestObject({
                get: getFunc,
                enumerable: true,
                configurable: true
            })
        }));
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({}) }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, undefined, undefined, true, true);
    });
runTestCase(testcase);