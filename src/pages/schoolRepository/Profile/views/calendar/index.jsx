import React from "react";

export default function Calendar() {
  return (
    <div>
      <h4>Calendário</h4>
      <h5>Curso</h5>
      <table>
        <thead>
          <tr>
            <th>1° ano(10° Classe)</th>
            <th>2° ano(11° Classe)</th>
            <th>3° ano(12° Classe)</th>
            <th>4° ano(13° Clase)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <ul>
                <li>Mátematica</li>
                <li>Física</li>
                <li>T.L.P</li>
                <li>Química</li>
                <li>Empreendedorismo</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Mátematica</li>
                <li>Física</li>
                <li>T.L.P</li>
                <li>Química</li>
                <li>Empreendedorismo</li>
                <li>Educação Física</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Mátematica</li>
                <li>Física</li>
                <li>T.L.P</li>
                <li>TIC</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Projecto tecnológico</li>
                <li>Orientação</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
