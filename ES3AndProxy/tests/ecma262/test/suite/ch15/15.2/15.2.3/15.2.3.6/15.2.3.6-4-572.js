wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var setFunc = wrapTestObject(function () {
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({ set: setFunc }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && desc.set === setFunc;
});
runTestCase(testcase);