wrapTestObject(function testcase() {
    var fun = wrapTestObject(function () {
            return 10;
        });
    var descObj = wrapTestObject({ get: fun });
    Object.defineProperty(descObj, 'set', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && typeof desc.set === 'undefined' && obj.prop === 10;
});
runTestCase(testcase);