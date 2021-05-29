import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ModelS.css";
function ModelS() {
  const [price, setPrice] = useState(0);
  const [range, setRange] = useState("663km");
  const [speed, setSpeed] = useState("250km/h");
  const [accelaration, setAccelaration] = useState("3.2s");
  return (
    <div className="modelS">
      <div className="modelS__header">
        <div className="modelS__header__logo">
          <Link to="/">
            <img
              className="modelS__header__logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="modelS__body">
        <div className="modelS__images">
          <img src="https://static-assets.tesla.com/configurator/compositor?&options=$MTS11,$PPSW,$WS90,$IBC00&view=FRONT34&model=ms&size=1920&bkba_opt=1&version=v0028d202105270438&crop=1300,550,300,250&version=v0028d202105270438"></img>
          <div className="modelS__images__price">
            <span>
              {price} Purchase Price
              <span
                style={{
                  fontWeight: "300",
                  color: "gray",
                  marginRight: "30px",
                }}
              >
                $9000 Potential savings over 6 years
              </span>
            </span>
          </div>
        </div>
        <div className="modelS__options">
          <h1>Model S</h1>
          <span style={{ marginTop: "10px" }}>
            Est. delivery : August-September
          </span>
          <form class="modelS__form">
            <div class="modelS__priceradio">
              <input
                type="radio"
                id="purchasePrice"
                name="price"
                value="purchasePrice "
              />
              <label for="purchasePrice">Purchase Price</label>
              <input type="radio" id="savings" name="price" value="savings" />
              <label style={{ marginLeft: "10px" }} for="savings">
                Potential Savings*
              </label>
            </div>

            <div className="modelS__summary__numbers">
              <h2>{range}</h2>
              <h2>{speed}</h2>
              <h2>{accelaration}</h2>
            </div>
            <div className="modelS__summary">
              <span>Range (est.)</span>
              <span>Top Speed</span>
              <span>0-100 km/h</span>
            </div>

            <br></br>
          </form>
          <div class="modelS__varientradio">
            <input
              type="radio"
              id="long"
              name="varient"
              value="long"
              onClick={() => {
                setPrice(114990);
                setAccelaration("3.2s");
                setRange("663km");
                setSpeed("250km/h");
              }}
            />
            <label for="long" style={{ width: "300px" }}>
              Long range
              <label>$114990</label>
            </label>

            <input
              type="radio"
              id="plaid"
              name="varient"
              value="plaid"
              onClick={() => {
                setPrice(155990);
                setAccelaration("2.1s");
                setRange("628km");
                setSpeed("332km/h");
              }}
            />
            <label style={{ marginLeft: "10px" }} for="plaid">
              Plaid
              <label>$155990</label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelS;
