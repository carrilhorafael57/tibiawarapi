import React, { useState } from "react";
import Tabledata from "./Tabledata";

const Navbar = () => {
  const [input, setInput] = useState();
  const [guildName, setGuildName] = useState("");
  const [fetch, setFetch] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };

  const callGuild = (e) => {
    e.preventDefault();
    setGuildName(input);
    setFetch(() => !fetch);
    setInput("");
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Enemy Hauzidawn
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInput}
            />
            <button
              className="btn btn-outline-success"
              onClick={callGuild}
              value={input}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      {fetch && <Tabledata guildName={guildName} />}
    </>
  );
};

export default Navbar;
