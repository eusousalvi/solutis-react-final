export default function getTotalDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
