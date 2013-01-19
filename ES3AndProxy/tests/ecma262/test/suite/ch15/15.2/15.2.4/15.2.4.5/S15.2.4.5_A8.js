if (!Object.prototype.hasOwnProperty.hasOwnProperty('length')) {
    $FAIL('#0: the Object.prototype.hasOwnProperty has length property.');
}
if (Object.prototype.hasOwnProperty.propertyIsEnumerable('length')) {
    $ERROR('#1: the Object.prototype.hasOwnProperty.length property has the attributes DontEnum');
}
for (p in Object.prototype.hasOwnProperty) {
    if (p === 'length')
        $ERROR('#2: the Object.prototype.hasOwnProperty.length property has the attributes DontEnum');
}