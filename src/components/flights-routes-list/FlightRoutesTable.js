import { useState } from "react";
import FlightRoutesRow from "./FlightRoutesRow";

function FlightRoutesTable() {
  const [flights] = useState([
    {
      id: 1,
      origem: "Salvador",
      destino: "São Paulo",
      status: "Confirmado",
      modo: "modo do voo",
      horas: "01:30:00",
      dataPartida: "11/01/2020",
      dataChegada: "11/01/2020",
      horaPartida: "07:00:00",
      horaChegada: "09:30:00",
    },
    {
      id: 2,
      origem: "Salvador",
      destino: "São Paulo",
      status: "Confirmado",
      modo: "modo do voo",
      horas: "01:30:00",
      dataPartida: "11/01/2020",
      dataChegada: "11/01/2020",
      horaPartida: "07:00:00",
      horaChegada: "09:30:00",
    },
    {
      id: 3,
      origem: "Salvador",
      destino: "São Paulo",
      status: "Confirmado",
      modo: "modo do voo",
      horas: "01:30:00",
      dataPartida: "11/01/2020",
      dataChegada: "11/01/2020",
      horaPartida: "07:00:00",
      horaChegada: "09:30:00",
    },
  ]);

  return (
    <table className="table table-striped table-bordered mt-2">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Origem</th>
          <th scope="col">Destino</th>
          <th scope="col">Status do Voo</th>
          <th scope="col">Modo do Voo</th>
          <th scope="col">Horas Totais</th>
          <th scope="col">Data de Partida</th>
          <th scope="col">Data de Chegada</th>
          <th scope="col">Hora da Partida</th>
          <th scope="col">Hora da Chegada</th>
          <th scope="col" className="text-center">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight, index) => {
          return <FlightRoutesRow key={index} flight={flight} />;
        })}
      </tbody>
    </table>
  );
}

export default FlightRoutesTable;
