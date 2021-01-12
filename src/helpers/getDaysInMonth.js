export default function getDaysInMonth(month) {
  const days = Array.from(document.getElementsByName(month)).map(
    (day) => day.value,
  );
  return days;
}
