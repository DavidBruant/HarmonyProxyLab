wrapTestObject(function testcase() {
    var data = 'data';
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({
        descObj: wrapTestObject({
            set: wrapTestObject(function (value) {
                data = value;
            })
        })
    }));
    obj.descObj = 'overrideData';
    return obj.hasOwnProperty('descObj') && data === 'overrideData';
});
runTestCase(testcase);