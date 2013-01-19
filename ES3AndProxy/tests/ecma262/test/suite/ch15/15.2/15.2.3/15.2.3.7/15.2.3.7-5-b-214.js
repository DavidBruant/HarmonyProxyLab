wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var func = wrapTestObject(function (a, b) {
            arguments.get = wrapTestObject(function () {
                return 'arguments';
            });
            Object.defineProperties(obj, wrapTestObject({ property: arguments }));
            return obj.property === 'arguments';
        });
    return func();
});
runTestCase(testcase);