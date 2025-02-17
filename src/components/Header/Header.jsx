import React from "react";
import data from "../../utils/data.min.json";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.header}>
      <h2>Dashboard</h2>
      <div className={style.trading_info}>
        <div>
          <span>TRADING CAPITAL</span>
          <h1>
            {data.trading_capital}
            {data.trading_capital_currency}
          </h1>
        </div>
        <div className={style.balance_info}>
          <span>BALANCE:</span> <strong>{data.balance}</strong>
          <br />
          <span>ON HOLD:</span> <strong>{data.on_hold}</strong>
        </div>
      </div>
    </div>
  );
};

export default Header;
