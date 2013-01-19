var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var descObj = wrapTestObject(new Date());
        var setFun = wrapTestObject(function (value) {
                data = value;
            });
        descObj.prop = wrapTestObject({ set: setFun });
        var obj = wrapTestObject({});
        Object.defineProperties(obj, descObj);
        obj.prop = 'dateData';
        return obj.hasOwnProperty('prop') && data === 'dateData';
    });
runTestCase(testcase);