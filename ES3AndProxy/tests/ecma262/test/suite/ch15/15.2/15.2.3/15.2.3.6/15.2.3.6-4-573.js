wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var verifySetFunc = 20;
    var setFunc = wrapTestObject(function (value) {
            verifySetFunc = value;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({ set: setFunc }));
    obj.prop = 2010;
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && desc.set === setFunc && verifySetFunc === 2010;
});
runTestCase(testcase);