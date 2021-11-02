// ===============================================
// Function to generate random numbers ===========
// ===============================================
const rand = (min, max) => (
  Math.floor(Math.random() * (max - min) + min));


// ===============================================
// Function to generate set of hour and minutes ==
// ===============================================
const getHour = (entree, range) => {
  let hour = entree;
  let minutes = rand(59 - (range - 1), 60 + range)
  minutes >= 60 ? minutes -= 60 : hour -= 1;
  return `${hour}:${minutes}`;
};


// ===============================================
// Function to swap time if index previous greater
// ===============================================
const arrangeValues = (arg) => {
  const result = arg.map((time, index) => {
    time = time.toString().replace(/^-/, '');
    if (time.toString().split(':')[0].length < 2) {
      time = `0${time}`;
    }
    if (time.toString().split(':')[1].length < 2) {
      time = `${time.toString().split(':')[0]
      }:0${time.toString().split(':')[1]}`;
    }
    return time;
  })
  if (result[1].replace(/^:/, '') > result[2].replace(/^:/, '')) {
    return [result[0], result[2], result[1], result[3]];
  }
  return result;
};


// ===============================================
// Function to arrange and verify interval of time
// ===============================================
const generateTime = (
  entree = 8,
  workday = 8,
  lunchtime = Math.floor(workday / 2) + entree,
  pause = 1,
  range = 15
) => {
  let onDuty = false
  if (workday === 12) {
    pause = 0;
    onDuty = true;
  }

  const start = getHour(entree, range);
  const startArr = start.split(':');

  if (lunchtime > 23) lunchtime = lunchtime - 24;

  let lunchBreak = getHour(lunchtime, range);
  const lunchBreakEnd = (`${Number(lunchBreak.split(':')[0])
    + pause}:${lunchBreak.split(':')[1]}`);
  let endShift = Number(startArr[0]) + Number(workday) + Number(pause);

  if (endShift > 23) endShift = endShift - 24;

  endShift = `${endShift}:${startArr[1]}`;

  if (onDuty) return [start, '', '', endShift];

  const result = [start, lunchBreak, lunchBreakEnd, endShift]
  
  return arrangeValues(result)
};

export { generateTime };
