enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  
  const isWeekend = (day: DayOfWeek) :boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return console.log(true), true; 
  }
  else {
    return console.log(false), false; 
  }}
  
  export default  console.log(isWeekend(DayOfWeek.Tuesday));