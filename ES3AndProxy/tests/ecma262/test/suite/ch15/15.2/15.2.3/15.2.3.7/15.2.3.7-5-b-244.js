wrapTestObject(function testcase() {
    var data = 'data';
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    try {
        Math.prop = wrapTestObject({ set: setFun });
        var obj = wrapTestObject({});
        Object.defineProperties(obj, Math);
        obj.prop = 'mathData';
        return obj.hasOwnProperty('prop') && data === 'mathData';
    } finally {
        delete Math.prop;
    }
});
runTestCase(testcase);