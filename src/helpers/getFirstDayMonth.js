export default function getFirstDayMonth(year) {
  return (month) => {
    const day = new Date(year, month, 1).getDay();
    return day;
  };
}
