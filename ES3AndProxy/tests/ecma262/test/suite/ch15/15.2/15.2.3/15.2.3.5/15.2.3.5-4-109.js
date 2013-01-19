var testcase = wrapTestObject(function testcase() {
        var descObj = wrapTestObject({});
        Object.defineProperty(descObj, 'configurable', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        var result1 = newObj.hasOwnProperty('prop');
        delete newObj.prop;
        var result2 = newObj.hasOwnProperty('prop');
        return result1 === true && result2 === true;
    });
runTestCase(testcase);