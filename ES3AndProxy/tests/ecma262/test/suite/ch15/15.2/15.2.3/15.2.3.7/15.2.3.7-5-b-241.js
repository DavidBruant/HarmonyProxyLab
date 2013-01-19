wrapTestObject(function testcase() {
    var data = 'data';
    var descStr = wrapTestObject(new String());
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    descStr.prop = wrapTestObject({ set: setFun });
    var obj = wrapTestObject({});
    Object.defineProperties(obj, descStr);
    obj.prop = 'strData';
    return obj.hasOwnProperty('prop') && data === 'strData';
});
runTestCase(testcase);