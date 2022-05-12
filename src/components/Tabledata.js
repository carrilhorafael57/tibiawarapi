import React, { useState, useEffect } from "react";
import { CgArrowsV } from "react-icons/cg";

const Tabledata = ({ guildName }) => {
  const [membersOnline, setMembersOnline] = useState([]);
  const [header, setHeader] = useState("");
  const [sorcerers, setSorcerers] = useState([]);
  const [druids, setDruids] = useState([]);
  const [knights, setKnights] = useState([]);
  const [paladins, setPaladins] = useState([]);
  // const [order, setOrder] = useState(ASC);

  function toTitles(s) {
    return s.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    fetch(`https://api.tibiadata.com/v2/guild/${guildName}.json`)
      .then((res) => res.json())
      .then((resp) => {
        const headerConvert = toTitles(resp.guild.data.name);
        setHeader(headerConvert);
        const { members } = resp.guild; // this is destructuring, not state
        const allCharacters = members.reduce((accum, iter) => {
          accum.push(...iter.characters);
          return accum;
        }, []);
        setMembersOnline(
          allCharacters.filter(({ status }) => status !== "offline")
        );

        setKnights(
          membersOnline.sort((a, b) => (a.level < b.level ? 1 : -1)) &&
            membersOnline.filter(
              (character) =>
                character.vocation === "Elite Knight" ||
                character.vocation === "Knight"
            )
        );

        setDruids(
          membersOnline.filter(
            (character) =>
              character.vocation === "Elder Druid" ||
              character.vocation === "Druid"
          )
        );

        setPaladins(
          membersOnline.filter(
            (character) =>
              character.vocation === "Royal Paladin" ||
              character.vocation === "Paladin"
          )
        );

        setSorcerers(
          membersOnline.filter(
            (character) =>
              character.vocation === "Master Sorcerer" ||
              character.vocation === "Sorcerer"
          )
        );
      })
      .catch((err) => console.log(err));
  }, [guildName, membersOnline]);

  return (
    <div className="container">
      <br />
      <h1 className="guild-name">{header}</h1>
      <br />
      <table className="table">
        <thead className='header-table'>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Vocation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {knights.map((d) => (
            <tr
              key={d.name}
              className="knights"
              onClick={(e) => {
                navigator.clipboard.writeText(
                  `exiva "${e.currentTarget.children[0].innerText}`
                );
              }}
            >
              <td key={d.name}>{d.name}</td>
              <td key={d.level}>{d.level}</td>
              <td key={d.vocation}>{d.vocation}</td>
              <td key={d.status}>{d.status}</td>
            </tr>
          ))}
          {paladins.map((d) => (
            <tr
              key={d.name}
              className="paladins"
              onClick={(e) => {
                navigator.clipboard.writeText(
                  `exiva "${e.currentTarget.children[0].innerText}`
                );
              }}
            >
              <td key={d.name}>{d.name}</td>
              <td key={d.level}>{d.level}</td>
              <td key={d.vocation}>{d.vocation}</td>
              <td key={d.status}>{d.status}</td>
            </tr>
          ))}
          {sorcerers.map((d) => (
            <tr
              key={d.name}
              className="sorcerers"
              onClick={(e) => {
                navigator.clipboard.writeText(
                  `exiva "${e.currentTarget.children[0].innerText}`
                );
              }}
            >
              <td key={d.name}>{d.name}</td>
              <td key={d.level}>{d.level}</td>
              <td key={d.vocation}>{d.vocation}</td>
              <td key={d.status}>{d.status}</td>
            </tr>
          ))}
          {druids.map((d) => (
            <tr
              key={d.name}
              className="druids"
              onClick={(e) => {
                navigator.clipboard.writeText(
                  `exiva "${e.currentTarget.children[0].innerText}`
                );
              }}
            >
              <td key={d.name}>{d.name}</td>
              <td key={d.level}>{d.level}</td>
              <td key={d.vocation}>{d.vocation}</td>
              <td key={d.status}>{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabledata;
