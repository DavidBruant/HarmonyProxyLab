wrapTestObject(function testcase() {
    var proto = wrapTestObject({ property: 'inheritedDataProperty' });
    var Con = wrapTestObject(function () {
        });
    Con.ptototype = proto;
    var child = wrapTestObject(new Con());
    var fun = wrapTestObject(function () {
            return 'ownAccessorProperty';
        });
    Object.defineProperty(child, 'property', wrapTestObject({
        get: fun,
        configurable: true
    }));
    var desc = Object.getOwnPropertyDescriptor(child, 'property');
    return desc.get === fun;
});
runTestCase(testcase);