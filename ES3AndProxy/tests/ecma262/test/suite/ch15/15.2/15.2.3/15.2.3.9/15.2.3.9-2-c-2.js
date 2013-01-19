wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 10;
    });
    var resultSetFun = false;
    wrapTestObject(function set_func() {
        resultSetFun = true;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    }));
    Object.freeze(obj);
    var res1 = obj.hasOwnProperty('foo');
    delete obj.foo;
    var res2 = obj.hasOwnProperty('foo');
    var resultConfigurable = res1 && res2;
    var resultGetFun = obj.foo === 10;
    obj.foo = 12;
    var resultEnumerable = false;
    for (var prop in obj) {
        if (prop === 'foo') {
            resultEnumerable = true;
        }
    }
    var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
    var result = resultConfigurable && resultEnumerable && resultGetFun && resultSetFun;
    return desc.configurable === false && result;
});
runTestCase(testcase);