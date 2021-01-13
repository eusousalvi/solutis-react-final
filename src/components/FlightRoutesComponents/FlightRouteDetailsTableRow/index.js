export default function FlightRoutesDetailsTableRow(props) {
  
  return (
    <tr>
      <td>{props.route.type}</td>
      <td>{props.route.city}</td>
      <td>{props.route.airline}</td>
      <td>{props.route.flightNumber}</td>
      <td>{props.route.date}</td>
      <td>{props.route.time}</td>
      <td>{props.route.checkout}</td>
    </tr>
  );
}
