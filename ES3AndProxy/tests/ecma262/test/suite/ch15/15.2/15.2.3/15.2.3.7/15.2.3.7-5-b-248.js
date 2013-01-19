wrapTestObject(function testcase() {
    var data = 'data';
    var descObj = wrapTestObject(new Error('test'));
    descObj.description = wrapTestObject({ value: 11 });
    descObj.message = wrapTestObject({ value: 11 });
    descObj.name = wrapTestObject({ value: 11 });
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    descObj.prop = wrapTestObject({ set: setFun });
    var obj = wrapTestObject({});
    Object.defineProperties(obj, descObj);
    obj.prop = 'errorData';
    return obj.hasOwnProperty('prop') && data === 'errorData';
});
runTestCase(testcase);