if (Object.propertyIsEnumerable('prototype')) {
    $ERROR('#1: the Object.prototype property has the attributes DontEnum');
}
var cout = 0;
for (p in Object) {
    if (p === 'prototype')
        cout++;
}
if (cout !== 0) {
    $ERROR('#2: the Object.prototype property has the attributes DontEnum');
}