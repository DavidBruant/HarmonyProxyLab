wrapTestObject(function testcase() {
    var data = 'data';
    var descObj = wrapTestObject(new Boolean(false));
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    descObj.prop = wrapTestObject({ set: setFun });
    var obj = wrapTestObject({});
    Object.defineProperties(obj, descObj);
    obj.prop = 'booleanData';
    return obj.hasOwnProperty('prop') && data === 'booleanData';
});
runTestCase(testcase);