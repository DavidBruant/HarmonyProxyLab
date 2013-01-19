# Doc

ES5ObjectModelEmul.js replaces ````Object```` with a custom equivalent that creates objects which are actually proxies.
The idea is to outsource/self-host all the ES5 object model (property descriptors/[[Extensible]]) while the heart of what
objects are is just objects as maps.

Relevant test262 tests have been imported.

This project aims at mass-converting relevant Test262 tests to test ES5ObjectModelEmul.
At each ES5ObjectModelEmul.js modification, do the following:
* copy ES5ObjectModelEmul.js to the ecma262/test/harness directory
* regenerate the website with ````python packager.py ES5````