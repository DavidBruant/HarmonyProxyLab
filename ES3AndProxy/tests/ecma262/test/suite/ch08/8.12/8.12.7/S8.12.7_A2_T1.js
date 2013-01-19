var __color__map = wrapTestObject({});
if (delete __color__map.red !== true) {
    $ERROR('#1: var __color__map = {}; delete __color__map.red === true. Actual: ' + delete __color__map.red);
}
;
if (delete __color__map['green'] !== true) {
    $ERROR('#2: var __color__map = {}; delete __color__map["green"] === true. Actual: ' + delete __color__map['green']);
}
;
var blue = 1;
if (delete __color__map[blue] !== true) {
    $ERROR('#3: var __color__map = {}; var blue = 1; delete __color__map[blue] === true. Actual: ' + delete __color__map[blue]);
}
;