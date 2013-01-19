wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var func = wrapTestObject(function (a, b, c) {
            return arguments;
        });
    var args = func(1, true, 'a');
    Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ configurable: args }) }));
    var preCheck = obj.hasOwnProperty('property');
    delete obj.property;
    return preCheck && !obj.hasOwnProperty('property');
});
runTestCase(testcase);