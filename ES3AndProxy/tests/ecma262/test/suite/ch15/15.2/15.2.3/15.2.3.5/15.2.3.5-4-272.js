var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var descObj = wrapTestObject({});
        Object.defineProperty(descObj, 'set', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function (value) {
                    data = value;
                });
            })
        }));
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    });
runTestCase(testcase);