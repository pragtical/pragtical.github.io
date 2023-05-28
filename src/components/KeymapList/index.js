import React from 'react';

export default function KeymapList({jsonData}) {
  return (
    <table style={{width: "100%"}}>
      <thead>
        <tr>
          <th>Command</th>
          <th>Keys</th>
        </tr>
      </thead>
      <tbody>
        {jsonData.map((row, index) => {
          return <tr key={index}>
            <td>{row[0]}</td>
            <td>
            {row[1].map((key, kidx) => {
              if (kidx == 0) {
                return <kbd>{key}</kbd>;
              }
              return <span> , <kbd>{key}</kbd></span>;
            })}
            </td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}
