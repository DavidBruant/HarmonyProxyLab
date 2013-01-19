wrapTestObject(function testcase() {
    var proto = wrapTestObject({ property: 'inheritedDataProperty' });
    var Con = wrapTestObject(function () {
        });
    Con.ptototype = proto;
    var child = wrapTestObject(new Con());
    var desc = Object.getOwnPropertyDescriptor(child, 'property');
    return typeof desc === 'undefined';
});
runTestCase(testcase);