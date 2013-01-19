wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    Object.defineProperty(o, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
            return 5;
        }),
        configurable: true
    }));
    Object.preventExtensions(o);
    Object.defineProperty(o, 'foo', wrapTestObject({ value: 'hello' }));
    var fooDescrip = Object.getOwnPropertyDescriptor(o, 'foo');
    return o.foo === 'hello' && fooDescrip.get === undefined && fooDescrip.set === undefined && fooDescrip.value === 'hello' && fooDescrip.configurable === true && fooDescrip.enumerable === false && fooDescrip.writable === false;
});
runTestCase(testcase);