function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
};

function generateHour(min, max = min) {
  const hour = rand(min, max)
  const minutes = rand(0, 59)
  return `${hour}:${minutes.toString().length < 2 ? '0' + minutes : minutes}`
}

function generateDailyTimeShift(startTime, fullShift = 8) {
  const start = generateHour(startTime - 1, startTime + 1);
  const startArr = start.split(':');
  const fixedEntry = startArr[0]
  const launchPause = generateHour(Number(fixedEntry) + Number(fullShift/2));  
  const launchReturn = `${Number(launchPause.split(':')[0]) + 1}:${launchPause.split(':')[1]}`;  
  const endShift = `${Number(startArr[0]) + Number(fullShift) + 1}:${startArr[1]}`;
 return [
    start,
    launchPause,
    launchReturn,
    endShift,
  ];
}
