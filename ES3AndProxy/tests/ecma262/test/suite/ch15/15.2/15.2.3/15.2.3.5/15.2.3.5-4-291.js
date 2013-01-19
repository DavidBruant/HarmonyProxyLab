wrapTestObject(function testcase() {
    var data = 'data';
    try {
        fnGlobalObject().set = wrapTestObject(function (value) {
            data = value;
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: fnGlobalObject() }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    } finally {
        delete fnGlobalObject().set;
    }
});
runTestCase(testcase);