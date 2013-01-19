wrapTestObject(function testcase() {
    var data = 'data';
    var descObj = wrapTestObject(new RegExp());
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    descObj.prop = wrapTestObject({ set: setFun });
    var obj = wrapTestObject({});
    Object.defineProperties(obj, descObj);
    obj.prop = 'regExpData';
    return obj.hasOwnProperty('prop') && data === 'regExpData';
});
runTestCase(testcase);