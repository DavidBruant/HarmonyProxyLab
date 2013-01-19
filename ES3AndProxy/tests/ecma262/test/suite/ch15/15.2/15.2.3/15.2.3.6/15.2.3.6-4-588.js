var testcase = wrapTestObject(function testcase() {
        var appointment = wrapTestObject({});
        var data1 = 1001;
        Object.defineProperty(appointment, 'startTime', wrapTestObject({
            get: wrapTestObject(function () {
                return data1;
            }),
            enumerable: true,
            configurable: false
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
            configurable: true
        }));
        var meeting = Object.create(appointment);
        var data3 = 'In-person meeting';
        Object.defineProperty(meeting, 'conferenceCall', wrapTestObject({
            get: wrapTestObject(function () {
                return data3;
            }),
            enumerable: true,
            configurable: false
        }));
        var teamMeeting = Object.create(meeting);
        var hasOwnProperty = !teamMeeting.hasOwnProperty('name') && !teamMeeting.hasOwnProperty('startTime') && !teamMeeting.hasOwnProperty('conferenceCall');
        return hasOwnProperty && teamMeeting.name === 'NAME' && teamMeeting.startTime === 1001 && teamMeeting.conferenceCall === 'In-person meeting';
    });
runTestCase(testcase);