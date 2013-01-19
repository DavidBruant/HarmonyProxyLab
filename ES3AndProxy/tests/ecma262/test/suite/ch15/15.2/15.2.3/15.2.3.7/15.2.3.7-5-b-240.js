var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var arr = wrapTestObject([]);
        var setFun = wrapTestObject(function (value) {
                data = value;
            });
        arr.prop = wrapTestObject({ set: setFun });
        var obj = wrapTestObject({});
        Object.defineProperties(obj, arr);
        obj.prop = 'arrData';
        return obj.hasOwnProperty('prop') && data === 'arrData';
    });
runTestCase(testcase);