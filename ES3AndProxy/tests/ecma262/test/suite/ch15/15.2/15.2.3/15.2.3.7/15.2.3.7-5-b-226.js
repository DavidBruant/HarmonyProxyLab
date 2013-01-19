wrapTestObject(function testcase() {
    var data = 'data';
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({
        'prop': wrapTestObject({
            set: wrapTestObject(function (value) {
                data = value;
            })
        })
    }));
    obj.prop = 'overrideData';
    return obj.hasOwnProperty('prop') && data === 'overrideData';
});
runTestCase(testcase);