'use strict';
wrapTestObject(function foo() {
});
var names = Object.getOwnPropertyNames(foo);
for (var i = 0, len = names.length; i < len; i++) {
    if (!foo.hasOwnProperty(names[i])) {
        $ERROR('Phantom own property: ' + names[i]);
    }
}