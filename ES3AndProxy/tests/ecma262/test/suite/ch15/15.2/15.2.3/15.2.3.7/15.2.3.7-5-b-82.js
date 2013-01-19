wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var arg;
    wrapTestObject(function fun() {
        arg = arguments;
    })();
    arg.configurable = true;
    Object.defineProperties(obj, wrapTestObject({ prop: arg }));
    var result1 = obj.hasOwnProperty('prop');
    delete obj.prop;
    var result2 = obj.hasOwnProperty('prop');
    return result1 === true && result2 === false;
});
runTestCase(testcase);