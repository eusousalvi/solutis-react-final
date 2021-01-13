export default function getWeekend(year, month, day) {
  const weekDay = new Date(year, month, day).getDay();
  return weekDay === 6 || weekDay === 0;
}
