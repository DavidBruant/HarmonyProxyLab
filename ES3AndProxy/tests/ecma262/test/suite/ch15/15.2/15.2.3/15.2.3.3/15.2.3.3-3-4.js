wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'property', wrapTestObject({
        get: wrapTestObject(function () {
            return 'inheritedDataProperty';
        }),
        configurable: true
    }));
    var Con = wrapTestObject(function () {
        });
    Con.ptototype = proto;
    var child = wrapTestObject(new Con());
    Object.defineProperty(child, 'property', wrapTestObject({
        value: 'ownDataProperty',
        configurable: true
    }));
    var desc = Object.getOwnPropertyDescriptor(child, 'property');
    return desc.value === 'ownDataProperty';
});
runTestCase(testcase);