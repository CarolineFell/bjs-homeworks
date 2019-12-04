'use strict';

function setDailyRhythm(wakeUpTime, bedTime) {

	function setAlarm(time, callback) {
        // функция, которая должна быть вызвана в заданное time время и которая возвращает 
        // в качестве результата другую функцию, в которую передаётся системное время. 
        // Если оно совпадает с заданным в setAlarm, необходимо вызывать callback.

		return function checkTime(timeToCheck) {
			const timeArr = [parseInt(time.substring(0,2)), parseInt(time.substring(3))];
			if (timeToCheck[0] === timeArr[0] && timeToCheck[1] === timeArr[1]) {
				callback();
			};
		};
    };
    
	function goodMorning() {
		console.log('Доброе утро, Вася!');
		clearInterval(wakeUpAlarm);
    };
    
	function goodNight() {
		console.log('Спокойной ночи, Вася!');
		clearInterval(sleepAlarm);
    };
    
	const checkMorning = setAlarm(wakeUpTime, goodMorning);
	const checkNight = setAlarm(bedTime, goodNight);

	function checkMorningAlarm() {
		const currentTime = new Date();
		const currentTimehhmm = [currentTime.getHours(), currentTime.getMinutes()];
		checkMorning(currentTimehhmm);
    };
    
	function checkNightAlarm() {
		const currentTime = new Date();
		const currentTimehhmm = [currentTime.getHours(), currentTime.getMinutes()];
		checkNight(currentTimehhmm);
    };
    
	const wakeUpAlarm = setInterval(checkMorningAlarm, 1000);
	const sleepAlarm = setInterval(checkNightAlarm, 1000);
};

setDailyRhythm('00:55', '00:56');
