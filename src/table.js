import React, { useState, useEffect } from "react";

const Tabledata = ({ guildName }) => {
  const [members, setMembers] = useState([]);
  const [membersOnline, setMembersOnline] = useState([]);

  useEffect(() => {
    fetch(`https://api.tibiadata.com/v2/guild/${guildName}.json`)
      .then((res) => res.json())
      .then((resp) => {
        setMembers(resp.guild.members[1].characters);
        setHeader(resp.guild.data.name);
        const allCharacters = members.reduce((accum, iter) => {
          accum.push(...iter.characters);
          return accum;
        }, []);
        setMembersOnline(() =>
          allCharacters.filter((player) => player.status !== "offline")
        );
      })
      .catch((err) => console.log(err));
  }, [members, guildName]);

  return (
    <div className="container">
      <h1>Enemies Online</h1>
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
            <tr
              key={d.id}
              onClick={(e) => {
                console.log(this.d.name);
                navigator.clipboard.writeText(`exiva "${e.target.value}`);
              }}
            >
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