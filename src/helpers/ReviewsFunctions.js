export function zeroLeft(number) {
  return String(number).padStart(2,'0');
}

export function handleDate(date) {
  const d = new Date(date);
  const day = zeroLeft(d.getDate());
  const month = zeroLeft(d.getMonth() + 1);
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

const ReviewsFunctions =  {
  handleDate,
  zeroLeft
}

export default ReviewsFunctions;