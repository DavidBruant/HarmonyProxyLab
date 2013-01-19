try {
    var __obj = wrapTestObject({
            toString: wrapTestObject(function () {
                return '1';
            }),
            valueOf: wrapTestObject(function () {
                return wrapTestObject(new Object());
            })
        });
    if (Number(__obj) !== 1) {
        $ERROR('#1.1: var __obj = {toNumber: function() {return "1"}, valueOf: function() {return new Object();}}; Number(__obj) === 1. Actual: ' + Number(__obj));
    }
} catch (e) {
    $ERROR('#1.2: var __obj = {toNumber: function() {return "1"}, valueOf: function() {return new Object();}}; Number(__obj) === 1. Actual: ' + e);
}