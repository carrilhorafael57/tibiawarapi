import React, { useState, useEffect } from "react";

const Characters = (members) => {
  const [data, setData] = useState([]);
  useEffect((members) => {
    setData(members);
  }, []);
  const strJson = JSON.stringify(members);
  console.log(strJson);
  console.log(data);
  //   console.log(members);

  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Level</th>
          <th>Vocation</th>
        </thead>
        <tbody>
          {strJson.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.level}</td>
              <td>{d.vocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characters;
