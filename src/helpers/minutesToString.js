export default function minutesToString(minutes) {
  return `${Math.floor(minutes / 60)}:${minutes % 60 <= 9 ? "0" : ""}${
    minutes % 60
  }`;
}
