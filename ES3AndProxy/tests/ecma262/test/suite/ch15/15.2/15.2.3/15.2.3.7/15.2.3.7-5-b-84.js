wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        fnGlobalObject().configurable = true;
        Object.defineProperties(obj, wrapTestObject({ prop: fnGlobalObject() }));
        var result1 = obj.hasOwnProperty('prop');
        delete obj.prop;
        var result2 = obj.hasOwnProperty('prop');
        return result1 === true && result2 === false;
    } finally {
        delete fnGlobalObject().configurable;
    }
});
runTestCase(testcase);