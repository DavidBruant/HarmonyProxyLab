wrapTestObject(function testcase() {
    var data = 'data';
    try {
        Math.set = wrapTestObject(function (value) {
            data = value;
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: Math }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    } finally {
        delete Math.set;
    }
});
runTestCase(testcase);