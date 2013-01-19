var testcase = wrapTestObject(function testcase() {
        var appointment = wrapTestObject({});
        Object.defineProperty(appointment, 'startTime', wrapTestObject({
            value: 1001,
            writable: false,
            enumerable: false,
            configurable: true
        }));
        Object.defineProperty(appointment, 'name', wrapTestObject({
            value: 'NAME',
            writable: false,
            enumerable: false,
            configurable: true
        }));
        var meeting = Object.create(appointment);
        Object.defineProperty(meeting, 'conferenceCall', wrapTestObject({
            value: 'In-person meeting',
            writable: false,
            enumerable: false,
            configurable: true
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
        return hasOwnProperty && !verifyTimeProp && !verifyNameProp && !verifyCallProp;
    });
runTestCase(testcase);