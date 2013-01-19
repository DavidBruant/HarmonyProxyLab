wrapTestObject(function testcase() {
    var str = wrapTestObject(new String('abc'));
    Object.defineProperty(str, 'ownProperty', wrapTestObject({
        value: 'ownString',
        configurable: true
    }));
    var result = Object.getOwnPropertyNames(str);
    for (var p in result) {
        if (result[p] === 'ownProperty') {
            return true;
        }
    }
    return false;
});
runTestCase(testcase);