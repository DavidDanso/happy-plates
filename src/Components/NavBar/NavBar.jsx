import { useGlobalContext } from "../../context";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";

import "./NavBar.css";

const NavBar = () => {
  const [text, setText] = useState("");
  const { setQuery, fetchRandomMeal } = useGlobalContext();
  //
  const handleChange = (e) => {
    setText(e.target.value);
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setQuery(text);
    }
  };

  const handleRandomMeal = () => {
    setText("");
    setQuery("");
    fetchRandomMeal();
  };

  //
  return (
    <div className="main_navbar">
      <nav className="navbar navbar-expand-lg fixed-top menu" id="mainNav">
        <div className="container">
          <a className="navbar-brand">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <div id="form_container">
              <img src={search} className="search_icon" alt="search_icon" />
              <input
                className="form-control me-2"
                type="search"
                placeholder="type favorite meal..."
                aria-label="Search"
                value={text}
                onChange={handleChange}
              />
            </div>
            {/* end form_container */}

            <button className="btn" type="button" onClick={handleRandomMeal}>
              <span>suprise me!</span>
            </button>
          </form>
          {/* end form */}
        </div>
        {/* end container */}
      </nav>
    </div>
  );
};

export default NavBar;
