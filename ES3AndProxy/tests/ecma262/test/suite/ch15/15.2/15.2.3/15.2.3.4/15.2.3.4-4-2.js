wrapTestObject(function testcase() {
    var result = Object.getOwnPropertyNames(Object);
    var expResult = wrapTestObject([
            'getPrototypeOf',
            'getOwnPropertyDescriptor',
            'getOwnPropertyNames',
            'create',
            'defineProperty',
            'defineProperties',
            'seal',
            'freeze',
            'preventExtensions',
            'isSealed',
            'isFrozen',
            'isExtensible',
            'keys',
            'prototype',
            'length'
        ]);
    var found;
    return arrayContains(result, expResult);
});
runTestCase(testcase);