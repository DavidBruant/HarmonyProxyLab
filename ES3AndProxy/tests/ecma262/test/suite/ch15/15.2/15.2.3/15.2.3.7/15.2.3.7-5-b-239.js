wrapTestObject(function testcase() {
    var data = 'data';
    var descFun = wrapTestObject(function () {
        });
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    descFun.prop = wrapTestObject({ set: setFun });
    var obj = wrapTestObject({});
    Object.defineProperties(obj, descFun);
    obj.prop = 'funData';
    return obj.hasOwnProperty('prop') && data === 'funData';
});
runTestCase(testcase);