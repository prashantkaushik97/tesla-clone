import React from "react";
import "./ButtonSecondary.css";
function ButtonSecondary({ name, type, onClick }) {
  return (
    <div>
      <button className="buttonSecondary" onClick={onClick} type={type}>
        {name}
      </button>
    </div>
  );
}

export default ButtonSecondary;
