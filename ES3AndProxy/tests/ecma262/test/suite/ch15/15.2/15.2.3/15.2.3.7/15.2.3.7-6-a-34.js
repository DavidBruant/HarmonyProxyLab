wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var getFunc = wrapTestObject(function () {
            return 10;
        });
    Object.defineProperties(obj, wrapTestObject({
        prop: wrapTestObject({
            get: getFunc,
            enumerable: true,
            configurable: true
        })
    }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && typeof desc.set === 'undefined';
});
runTestCase(testcase);