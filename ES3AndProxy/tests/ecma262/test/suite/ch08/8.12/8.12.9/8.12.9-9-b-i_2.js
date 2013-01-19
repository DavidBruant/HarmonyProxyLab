wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    Object.defineProperty(o, 'foo', wrapTestObject({
        value: 'hello',
        configurable: true,
        enumerable: true,
        writable: true
    }));
    Object.preventExtensions(o);
    Object.defineProperty(o, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
            return 5;
        })
    }));
    var fooDescrip = Object.getOwnPropertyDescriptor(o, 'foo');
    return o.foo === 5 && fooDescrip.get !== undefined && fooDescrip.set === undefined && fooDescrip.value === undefined && fooDescrip.configurable === true && fooDescrip.enumerable === true && fooDescrip.writable === undefined;
});
runTestCase(testcase);