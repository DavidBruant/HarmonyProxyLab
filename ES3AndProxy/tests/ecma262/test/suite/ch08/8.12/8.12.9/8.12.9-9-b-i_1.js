var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        Object.defineProperty(o, 'foo', wrapTestObject({
            value: 'hello',
            configurable: true
        }));
        Object.preventExtensions(o);
        Object.defineProperty(o, 'foo', wrapTestObject({
            get: wrapTestObject(function () {
                return 5;
            })
        }));
        var fooDescrip = Object.getOwnPropertyDescriptor(o, 'foo');
        return o.foo === 5 && fooDescrip.get !== undefined && fooDescrip.set === undefined && fooDescrip.value === undefined && fooDescrip.configurable === true && fooDescrip.enumerable === false && fooDescrip.writable === undefined;
    });
runTestCase(testcase);