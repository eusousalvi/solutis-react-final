export default function getWeekend(year, month, day) {
  const weekDay = new Date(year, month, day).getDay();
  console.log(weekDay);
  console.log(year, month, day);
  return weekDay === 6 || weekDay === 0;
}
