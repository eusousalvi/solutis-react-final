export default function parseFlightNodeDate(node, checkin = false) {
  const date = node.date.split("-");
  const time = checkin ? node.checkin.split(":") : node.checkout.split(":");
  return new Date(date[0], date[1] - 1, date[2], time[0], time[1]);
}
