wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var resultSetFun = false;
    Object.defineProperty(obj, 'foo1', wrapTestObject({
        value: 10,
        writable: false,
        enumerable: true,
        configurable: true
    }));
    wrapTestObject(function get_func() {
        return 10;
    });
    wrapTestObject(function set_func() {
        resultSetFun = true;
    });
    Object.defineProperty(obj, 'foo2', wrapTestObject({
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    }));
    Object.freeze(obj);
    var res1 = obj.hasOwnProperty('foo2');
    delete obj.foo2;
    var res2 = obj.hasOwnProperty('foo2');
    var resultConfigurable = res1 && res2;
    var resultGetFun = obj.foo2 === 10;
    obj.foo2 = 12;
    var resultEnumerable = false;
    for (var prop in obj) {
        if (prop === 'foo2') {
            resultEnumerable = true;
        }
    }
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'foo1');
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'foo2');
    var result = resultConfigurable && resultEnumerable && resultGetFun && resultSetFun;
    return dataPropertyAttributesAreCorrect(obj, 'foo1', 10, false, true, false) && result && desc1.configurable === false && desc1.writable === false && desc2.configurable === false;
});
runTestCase(testcase);