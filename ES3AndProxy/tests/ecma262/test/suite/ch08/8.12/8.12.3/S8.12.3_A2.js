var __obj = wrapTestObject({});
if (__obj.propFoo !== undefined) {
    $ERROR('#1: var __obj={}; __obj.propFoo === undefined. Actual: ' + __obj.propFoo);
}
if (__obj['propFoo'] !== undefined) {
    $ERROR('#2: var __obj={}; __obj[\'propFoo\'] === undefined. Actual: ' + __obj['propFoo']);
}