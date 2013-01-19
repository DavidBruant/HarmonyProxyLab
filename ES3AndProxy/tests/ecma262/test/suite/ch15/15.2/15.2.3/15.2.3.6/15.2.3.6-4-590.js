var testcase = wrapTestObject(function testcase() {
        var appointment = wrapTestObject({});
        var data1 = 1001;
        Object.defineProperty(appointment, 'startTime', wrapTestObject({
            get: wrapTestObject(function () {
                return data1;
            }),
            set: wrapTestObject(function (value) {
                data1 = value;
            }),
            enumerable: true,
            configurable: true
        }));
        var data2 = 'NAME';
        Object.defineProperty(appointment, 'name', wrapTestObject({
            get: wrapTestObject(function () {
                return data2;
            }),
            set: wrapTestObject(function (value) {
                data2 = value;
            }),
            enumerable: true,
            configurable: false
        }));
        var meeting = Object.create(appointment);
        var data3 = 'In-person meeting';
        Object.defineProperty(meeting, 'conferenceCall', wrapTestObject({
            get: wrapTestObject(function () {
                return data3;
            }),
            set: wrapTestObject(function (value) {
                data3 = value;
            }),
            enumerable: true,
            configurable: false
        }));
        var teamMeeting = Object.create(meeting);
        var verifyTimeProp = false;
        var verifyNameProp = false;
        var verifyCallProp = false;
        for (var p in teamMeeting) {
            if (p === 'startTime') {
                verifyTimeProp = true;
            }
            if (p === 'name') {
                verifyNameProp = true;
            }
            if (p === 'conferenceCall') {
                verifyCallProp = true;
            }
        }
        var hasOwnProperty = !teamMeeting.hasOwnProperty('name') && !teamMeeting.hasOwnProperty('startTime') && !teamMeeting.hasOwnProperty('conferenceCall');
        return hasOwnProperty && verifyTimeProp && verifyNameProp && verifyCallProp;
    });
runTestCase(testcase);