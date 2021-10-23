import React, { useState, useEffect } from "react";

// setMembers(resp.guild.members[1].characters);

const Tabledata = ({ guildName }) => {
  const [members, setMembers] = useState([]);
  const [membersOnline, setMembersOnline] = useState([]);
  // const [data, setData] = useState();
  // const [order, setOrder] = useState("ASC");

  // ${guildName}
  useEffect(() => {
    fetch(`https://api.tibiadata.com/v2/guild/${guildName}.json`)
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setMembers(resp.guild.members[1].characters);
        setMembersOnline(() =>
          members.filter((player) => player.status !== "offline")
        );
      })
      .catch((err) => console.log(err));
  }, [members, guildName]);

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Vocation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {membersOnline.map((d, id) => (
            <tr key={id}>
              <td>{d.name}</td>
              <td>{d.level}</td>
              <td>{d.vocation}</td>
              <td>{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabledata;
