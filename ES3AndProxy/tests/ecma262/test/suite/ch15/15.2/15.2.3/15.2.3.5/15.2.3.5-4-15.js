wrapTestObject(function testcase() {
    var result = false;
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    Object.defineProperty(argObj, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            result = '[object Arguments]' === Object.prototype.toString.call(this);
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    var newObj = Object.create(wrapTestObject({}), argObj);
    return result && newObj.hasOwnProperty('prop');
});
runTestCase(testcase);