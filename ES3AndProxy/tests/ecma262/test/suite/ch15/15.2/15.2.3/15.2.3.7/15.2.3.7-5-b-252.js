wrapTestObject(function testcase() {
    var getFun = wrapTestObject(function () {
            return 11;
        });
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({
        prop: wrapTestObject({
            get: getFun,
            set: undefined
        })
    }));
    try {
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.hasOwnProperty('prop') && typeof desc.set === 'undefined';
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);