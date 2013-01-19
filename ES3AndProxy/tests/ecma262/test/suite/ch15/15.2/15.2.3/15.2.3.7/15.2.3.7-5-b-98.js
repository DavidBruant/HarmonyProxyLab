wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({
        property: wrapTestObject({
            configurable: wrapTestObject([
                1,
                2,
                3
            ])
        })
    }));
    var hadOwnProperty = obj.hasOwnProperty('property');
    delete obj.property;
    return !obj.hasOwnProperty('property') && hadOwnProperty;
});
runTestCase(testcase);