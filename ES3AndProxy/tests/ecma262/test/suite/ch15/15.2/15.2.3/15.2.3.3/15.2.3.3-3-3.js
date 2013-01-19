var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({ property: 'inheritedDataProperty' });
        var Con = wrapTestObject(function () {
            });
        Con.ptototype = proto;
        var child = wrapTestObject(new Con());
        child.property = 'ownDataProperty';
        var desc = Object.getOwnPropertyDescriptor(child, 'property');
        return desc.value === 'ownDataProperty';
    });
runTestCase(testcase);