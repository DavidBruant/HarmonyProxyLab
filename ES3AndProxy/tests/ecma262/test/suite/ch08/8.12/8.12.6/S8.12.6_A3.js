var __obj = wrapTestObject({});
__obj.hole = undefined;
if (__obj.hole !== undefined) {
    $ERROR('#1: var __obj={}; __obj.hole=undefined; __obj.hole === undefined. Actual: ' + __obj.hole);
}
if (__obj.notexist !== undefined) {
    $ERROR('#2: var __obj={}; __obj.hole=undefined; __obj.notexist === undefined. Actual: ' + __obj.notexist);
}
if (!('hole' in __obj)) {
    $ERROR('#3: var __obj={}; __obj.hole=undefined; "hole" in __obj');
}
if ('notexist' in __obj) {
    $ERROR('#4: var __obj={}; __obj.hole=undefined; "notexist" in __obj');
}