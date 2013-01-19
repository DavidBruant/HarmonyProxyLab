wrapTestObject(function testcase() {
    var proto = wrapTestObject({ 'parent': 'parent' });
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    var result = Object.getOwnPropertyNames(child);
    for (var p in result) {
        if (result[p] === 'parent') {
            return false;
        }
    }
    return true;
});
runTestCase(testcase);