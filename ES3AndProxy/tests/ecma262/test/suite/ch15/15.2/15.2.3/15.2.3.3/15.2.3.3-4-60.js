wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Array.prototype, 'reduceRight');
    if (desc.value === Array.prototype.reduceRight && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);