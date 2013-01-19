wrapTestObject(function testcase() {
    var data = 'data';
    var descObj = wrapTestObject(new Number(-9));
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    descObj.prop = wrapTestObject({ set: setFun });
    var obj = wrapTestObject({});
    Object.defineProperties(obj, descObj);
    obj.prop = 'numberData';
    return obj.hasOwnProperty('prop') && data === 'numberData';
});
runTestCase(testcase);