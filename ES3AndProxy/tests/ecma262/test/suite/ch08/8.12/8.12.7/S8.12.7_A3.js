var BLUE_NUM = 1;
var BLUE_STR = '1';
var YELLOW_NUM = 2;
var YELLOW_STR = '2';
var __color__map = wrapTestObject({
        red: 16711680,
        BLUE_NUM: 255,
        green: 65280,
        YELLOW_STR: 16776960
    });
if (delete __color__map[YELLOW_NUM] !== true) {
    $ERROR('#1: var BLUE_NUM=1; var BLUE_STR="1"; var YELLOW_NUM=2; var YELLOW_STR="2"; var __color__map = {red:0xFF0000, BLUE_NUM:0x0000FF, green:0x00FF00, YELLOW_STR:0xFFFF00}; delete __color__map[YELLOW_NUM] === true;');
}
;
if (__color__map[YELLOW_STR] !== undefined) {
    $ERROR('#2: var BLUE_NUM=1; var BLUE_STR="1"; var YELLOW_NUM=2; var YELLOW_STR="2"; var __color__map = {red:0xFF0000, BLUE_NUM:0x0000FF, green:0x00FF00, YELLOW_STR:0xFFFF00}; delete __color__map[YELLOW_NUM]; __color__map[YELLOW_STR] === undefined. Actual: ' + __color__map[YELLOW_STR]);
}
if (delete __color__map[BLUE_STR] !== true) {
    $ERROR('#3: var BLUE_NUM=1; var BLUE_STR="1"; var YELLOW_NUM=2; var YELLOW_STR="2"; var __color__map = {red:0xFF0000, BLUE_NUM:0x0000FF, green:0x00FF00, YELLOW_STR:0xFFFF00}; delete __color__map[BLUE_STR] === true. Actual: ' + delete __color__map[BLUE_STR]);
}
;
if (__color__map[BLUE_NUM] !== undefined) {
    $ERROR('#4: var BLUE_NUM=1; var BLUE_STR="1"; var YELLOW_NUM=2; var YELLOW_STR="2"; var __color__map = {red:0xFF0000, BLUE_NUM:0x0000FF, green:0x00FF00, YELLOW_STR:0xFFFF00}; delete __color__map[BLUE_STR]; __color__map[BLUE_NUM] === undefined. Actual: ' + __color__map[BLUE_NUM]);
}