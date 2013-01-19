wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var firstArg = 12;
    var secondArg = 12;
    var setFunc = wrapTestObject(function (a, b) {
            firstArg = a;
            secondArg = b;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({ set: setFunc }));
    obj.prop = 100;
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && desc.set === setFunc && firstArg === 100 && typeof secondArg === 'undefined';
});
runTestCase(testcase);