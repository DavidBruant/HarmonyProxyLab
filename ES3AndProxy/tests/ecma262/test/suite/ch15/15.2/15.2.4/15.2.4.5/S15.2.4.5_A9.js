if (!Object.prototype.hasOwnProperty.hasOwnProperty('length')) {
    $FAIL('#0: the Object.prototype.hasOwnProperty has length property');
}
if (delete Object.prototype.hasOwnProperty.length) {
    $ERROR('#1: The Object.prototype.hasOwnProperty.length property has the attributes DontDelete');
}
if (!Object.prototype.hasOwnProperty.hasOwnProperty('length')) {
    $FAIL('#2: The Object.prototype.hasOwnProperty.length property has the attributes DontDelete');
}