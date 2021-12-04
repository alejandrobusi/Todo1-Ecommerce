import React from "react";

function Searchbar() {
  function getInputText(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <form
      className="hero-btn mt-5"
      method="GET"
      action="./login.html"
      target="_blank"
    >
      <input type="text" id="input-search" onChange={getInputText} />
      <button
        type="submit"
        id="btn-submit-search"
        className="fs-3 btn btn-warning scaleUp"
        href="/login.html"
      >
        Buscar
      </button>
    </form>
  );
}

export default Searchbar;
