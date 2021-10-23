import React from "react";
//sfc
const NavBar = (props) => {
  //const length = props.titles.filter(title=>title.value>0).length
    return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">BookLibrary</span>
        <button type="button" class="btn btn-primary position-relative">
          Cart
        {/*   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {length}
            <span class="visually-hidden">unread messages</span>
          </span> */}
        </button>
      </div>
      
    </nav>
  );
};

export default NavBar;
