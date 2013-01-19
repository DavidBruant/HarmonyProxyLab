wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var setFunc = wrapTestObject(function (value) {
            this.len = value;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({ set: setFunc }));
    obj.prop = 2010;
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && desc.set === setFunc && obj.len === 2010;
});
runTestCase(testcase);